import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import { useStateContext } from "./contex";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const refresh=useRefreshToken();
  const { authState,getAccessToken} = useStateContext();
  
  useEffect(() => {
    const requestIntercept=axiosPrivate.interceptors.request.use(
      (config) => {
        if(!config?.headers?.Authorization){
          console.log("private attach token",getAccessToken());
          config.headers.Authorization = `Bearer ${getAccessToken()}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseIntercept = axiosPrivate.interceptors.response.use(
        response => response,
        async (error) => {
            const prevRequest = error?.config;
            if (error?.response?.status === 403 && !prevRequest?.sent) {
                prevRequest.sent = true;
                console.log("private  respones",error.response.status);
                const newAccessToken =  await refresh();
                console.log("new access private",newAccessToken);
                prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return axiosPrivate(prevRequest);
            }
            return Promise.reject(error);
        }
    );
    
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [authState,getAccessToken]);
  return axiosPrivate;
};

export default useAxiosPrivate;

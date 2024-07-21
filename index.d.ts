//import { Dispatch, SetStateAction } from "react";

interface typeTooggle{
    authState:{
        accessToken: any,
        refreshToken: any,
        authenticated: any,
    },
    setAuthState:Dispatch<SetStateAction<boolean>>,
    getAccessToken:()=>any,
    logout:()=>void,
    theme:string,
    toggleTheme:(newTheme?: "light" | "dark" )=>void
}

type registerformdatatype = {
    email: string;
    phone: string;
    username: string;
    password: string;
    confirmPassword?: string;
};
type loginformdatatype = {
    emailPnone: string;
    password: string;
};
//stack type Tab
type TabStackPramList={
    tab1:undefined,
    tab2:undefined,
    tab3:undefined,
    tab4:undefined,
}
//stack type
type logoutStackPramList={
    login:undefined,
    register:undefined,
}
//stack type
type LoginStackPramList={
    Home:undefined,
    About:undefined,
}

//Drawer type
type DorwarStackPramList = {
    Home: undefined,
    Profile: undefined,
    Room: undefined,
    Article: undefined,
    Transaction: undefined,
    Advance: undefined,
    Expense: undefined,
    SeasonVehicle: undefined,
    CropBuyer: undefined,
    Village: undefined,
    OwnerVsAgent: undefined,
    Employee: undefined,
    Leave: undefined,
    Report: undefined,
    ContactUs: undefined,
  };

type RenderDrawerItemProps = {
    label: string;
    iconName: string;
    colorIndex?: number;
    iconSize?: number;
    navigation: { navigate: (arg0: string) => void };
    navigateTo?: keyof DorwarStackPramList;
    active?:string;
    setActive?:Dispatch<SetStateAction<string>>;
};


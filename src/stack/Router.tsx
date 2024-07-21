import { NavigationContainer} from '@react-navigation/native'
import React from 'react';
import LogoutStk from './LogoutStk'
import MyDrawer from './DrawerStk'

import useLoadJWT from '../utility/useLoadJWT';
import Spinner from '../components/Model/Spinner';
import { useStateContext } from '../hooks/contex';
import {lightTheme,darkTheme} from '../utility/themes'
import Tabs from './TabStk';
const Router = () => {
  const {theme}=useStateContext();
  const{status,authState}=useLoadJWT();
  console.log("authState root",authState.authenticated)

  if (status === 'loading') {
    return <Spinner visible={true}/>
  }
  return (
    <NavigationContainer theme={theme==='dark'?darkTheme:lightTheme}>
      {authState?.authenticated===true?<Tabs/>:<LogoutStk/>}
    </NavigationContainer>
  )
}

export default Router
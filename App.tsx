import { ContexProvider } from './src/hooks/contex'
import Router from './src/stack/Router.tsx'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <GestureHandlerRootView>
      <ContexProvider>
        <Router/>
      </ContexProvider>
    </GestureHandlerRootView>
  )
}

export default App

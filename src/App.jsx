import React, { useState } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import Cardcontainer from './components/Cardcontainer'
import { StoreProvider } from './components/context'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
function App() {
  // let [arv, setArv]=useState("");
  // let pass=(v)=>{
  //   console.log(v)
  //      setArv(v);
  // }
  //   function change(){
  //       setMode((v)=>!v)
  //   }
  return (
    <>

    <BrowserRouter>
    <StoreProvider>
    <Header />
        <Input />
       <Cardcontainer />
    </StoreProvider>
    </BrowserRouter>
    </>

  )
}

export default App
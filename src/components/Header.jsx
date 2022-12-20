import React, { useContext, useState } from 'react'
import "./header.css"
import {BsFillMoonFill} from "react-icons/bs"
import {BsMoon} from "react-icons/bs"
import store from './context'

function Header() {
  let obj=useContext(store)
  return (
    <div className={`white cards`}>
      {/* ${!obj.mode &&"dark  mm"}  */}

    <header className={`flex `}>
      {/* ${!obj.mode&&"dark"} */}
       <h1>Where in the World?</h1>
       <button className={`'button flex ${!obj.mode&& 'dark' } '`} onClick={obj.setMode}>
         {obj.mode?<BsFillMoonFill/>:<BsMoon/>}
          {obj.mode?'Dark mode':'Light Mode'}
        </button> 
       </header>
    </div>
         
  )
}

export default Header
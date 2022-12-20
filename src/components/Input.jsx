import React, { useContext, useRef, useState } from 'react'
import "./input.css"
import store from './context';
import{AiOutlineSearch} from "react-icons/ai"
function Input() {
  let obj=useContext(store)
    let r=useRef();
    let i=useRef();
    let [cu,setCur]=useState("");
    let fs=()=>{
        if(cu===r.current.value){return}
        console.log(r.current.value)
        setCur(r.current.value)
    }
  return (
    <div className={`fl cards` }>
      {/* ${!obj.mode && 'dark'}  */}
      <div className={`f cards`}>
        {/* ${!obj.mode && 'dark'} */}
        <AiOutlineSearch size={'2rem' }
        className={`de ${!obj.mode && 'cards'}`}
        fill={"black"}
      
/>
        <input ref={i} onKeyUp={()=>{obj.pass(i.current.value)}} className={`in ${!obj.mode && 'dark'}`} type="text" placeholder='Search by country' />
      </div>
      <div className={``}>
        {/* ${!obj.mode && 'dark'} */}
        <select className='in cards w' ref={r} id="area" 
            onChange={()=>{
               i.current.value=""
              obj.area(r.current.value)}}>
            <option value="">Search by region</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}
export default Input
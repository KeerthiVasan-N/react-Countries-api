import{AiOutlineArrowRight} from "react-icons/ai"
import React, { useContext } from 'react'
import "./cardc.css"
import store from "./context"
import { Link ,useParams} from 'react-router-dom'

function Card({ name, pop, reg, cap,flag,el}) {
  // let {nams}=useParams();
  // alert(nams)
  let obj=useContext(store)
   if(!name||!pop||!reg||!cap||!flag){return}
  return (
    <div className='card  cards' onClick={()=>{
    }}>
      <div className="img">
        <img src={flag} alt={`Flag of ${name || "country"}`} />
      </div>
      <div className="content">
        <h2>{name}</h2>
        <p>Population: {pop}</p>
        <p>Region:{reg}</p>
        <p>Capital:{cap}</p>
          <div className="rr hovs">
          <a 
          className="hovs"
          href={`https://en.wikipedia.org/wiki/ ${name}`}
            target="_blank"  
          style={{color:`${obj.mode?"black":"white"}`}}>
          Learn More &rarr;
            </a>
          </div>
      </div>
    </div>

  )
}
export default Card
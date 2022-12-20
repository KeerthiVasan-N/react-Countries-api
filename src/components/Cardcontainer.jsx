import"./card.css"
import React, { useContext, useEffect } from 'react'
import Card from "./Card"
import store from "./context"

let response
function Cardcontainer() {
  let obj=useContext(store)
    // const country=async ()=>{
    // response =await fetch("https://restcountries.com/v3.1/all");
    //   let c= await response.json()
    //   obj.setarr(c)
    //   obj.setf(c)
    // }

    // useEffect(()=>{
    //  country()
    // },[])
    // if(arv!==""){
    //       re=ar.filter((el)=>el.name.common.toLowerCase().includes(arv.toLowerCase())) 
    //      console.log(re)
    //      let reee=[...re]
    //      fnw(reee)
    // }else{
    //   nw=ar
    // }
    // el.name.common
    // el.flags.svg
    // el.population
    // el.capital
    // el.subregion
  return (
    <div className="grid">
     <>
      {obj.arr.map((el)=>( 
        <Card key={el.flags.svg} el={el} flag={el.flags.svg} cap={el.capital} reg={el.subregion} name={el.name.common} pop={el.population}  />))}
     </> 
        </div>
     
  )
  }
export default Cardcontainer
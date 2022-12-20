import React from "react";
import { useState,useEffect } from "react";
let store=React.createContext(
    {
        mode:true,
        setMode:()=>{},
        arr:[],
        setarr:()=>{},
        pass:()=>{},
        area:()=>{},
        setf:()=>{},
        final:[]

    }
);
export let StoreProvider=(props)=>{
    let [mode,setMode]=useState(true);
    let [arr,setarr]=useState([]);
    let [search,setS]=useState(false)
    let [final,setf]=useState([])
    // setf(arr)
    function change(){
        setMode((v)=>!v)
        document.body.classList.toggle("dark");
        document.querySelectorAll(".cards").forEach((el)=>el.classList.toggle("ol"))
    }
     const pass=(v)=>{
        if(v!==""){
         let temp=final.filter((el)=>el.name.common.toLowerCase().includes(v.toLowerCase())) 
         setarr(temp)
        }else{
            setarr(final)
        }
     }
     
     const country=async (v="all")=>{
     let   response =await fetch(`https://restcountries.com/v3.1/${v}`);
          let c= await response.json()
          setarr(c)
          setf(c)
        }
        const area=(vi)=>{
            if(vi==""){
                country();
                return
            }{

                country(`region/${vi}`)
            }
         }
    
        useEffect(()=>{
         country()
        },[])


    return(
      <store.Provider
       value={
        {
           mode:mode,
           setMode:change,
           arr:arr,
           setarr:(v)=>{
              setarr(v)
           },
           pass,
           area,
           final,setf
        }
       }
      >{props.children}</store.Provider>

    )

}
export default store;
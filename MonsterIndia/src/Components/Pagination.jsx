import React, { useEffect, useState } from 'react'

const Pagination = ({showPerPage,onPaginationChange, total}) => {
    const [counter , setCounter] = useState(1);

    useEffect(()=>{
      const value = showPerPage * counter;
    //   console.log("start value:", value- showPerPage )
    //   console.log("end value:", value )
      onPaginationChange( value- showPerPage ,value )
    },[counter])
    
    const onButtonClick=(type) => {
        if(type==="prev"){
            if(counter === 1)
            {
                setCounter(1)
            } else {
                setCounter(counter-1)
            }
        } else if (type === "next"){
           if(Math.ceil(total/showPerPage) === counter ){
            setCounter(counter)
           } else {
            setCounter(counter + 1)
           }
        }
    }
  return (
    <div>
         <div>
             <button onClick={()=> onButtonClick("prev")} style={{backgroundColor:"blue" , color:'white', border:"none", padding:"8px",fontSize:"14px", cursor:"pointer", marginRight:"5px"}} >PREV</button>
             <button onClick={()=> onButtonClick("next")} style={{backgroundColor:"blue" , color:'white', border:"none", padding:"8px",fontSize:"14px", cursor:"pointer"}} >NEXT</button>
          </div> 
    </div>
  )
}

export default Pagination
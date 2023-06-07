import React, { useState } from 'react'

export default function CState() {

    const [data,setData]=useState(0)

    const onBtnClick=()=>{
        setData(data+1)
    }

  return (
    <>
    
    <h4>{data}</h4>

    <button onClick={()=>onBtnClick()}>click to search</button>
    
    </>
  )
}

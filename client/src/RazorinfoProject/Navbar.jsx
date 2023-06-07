import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    
    <ul className='navul'>



     <li  className='navulli'><Link className='link' to={"/"}>Home</Link></li>
     <li  className='navulli'><Link className='link' to={"/dataone"}>Dataone</Link></li>


    </ul>
    
    
    </>
  )
}

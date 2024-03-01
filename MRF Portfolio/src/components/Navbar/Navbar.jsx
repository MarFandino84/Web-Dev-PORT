import React from 'react'
import { NavbarStyle, NavlinkStyle } from './NavbarStyles'


const Navbar = () => {
  
  


  return (
    <>
      <NavbarStyle>
         <NavlinkStyle to={"/"}>Home</NavlinkStyle>  
         <NavlinkStyle to={"About"}>About</NavlinkStyle>  
         <NavlinkStyle to={"Projects"}>Projects</NavlinkStyle>  
         <NavlinkStyle to={"Contact"}>Contact</NavlinkStyle>  
         
        
      </NavbarStyle>



    </>
  )
}

export default Navbar

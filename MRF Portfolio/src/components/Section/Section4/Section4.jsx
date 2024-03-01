import React from 'react'
import { Link } from 'react-router-dom'
import {FaGithub} from "react-icons/fa"
import { FaWhatsapp } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import styled from 'styled-components'


const Links = styled(Link)`
margin: 3em 0;
filter: blur(1px);

&:hover { 
   filter: none;
   scale: 1.025;
}
`

const Section4 = () => {
  return (
    <>
      <Links target='blank' to={"https://github.com/MarFandino84"}><FaGithub style={{"width":"5em","color": "white", "height": "5em"}} /></Links>
      <Links target='blank' to={"https://wa.me/5491136991203"}><FaWhatsapp style={{"width":"5em","color": "green", "height": "5em"}} /></Links>
      <Links target='blank' to={"mailto:Mano84@hotmail.com.ar"}><FaMailBulk style={{"width":"5em","color": "white", "height": "5em"}}/></Links>
    </>
  )
}

export default Section4

import React from 'react'
import { Container } from './Section3Styles'
import { IGNIGO } from '../../data/Igni'
import { otto } from '../../data/otto'
import  {pastry} from "../../data/pastry"
import { Todo } from '../../data/todo'
import {FaLink, FaGithub} from "react-icons/fa"



const Section3 = () => {
  return (
    <>
        <Container>
              
              <img src={IGNIGO  } />
                  <h4>Ignigo Bikes E-Commerce</h4>
                  <span>REACT REDUX ROUTER STYLED-COMPONENT </span>
                  <a href={"https://ignigo-bikes-8eln-ca16wcrln-marfandino.vercel.app/"} target="_blank"><FaLink /></a>    
                  <a href={"https://github.com/MarFandino84/Ignigo-Bikes"} target="_blank" ><FaGithub /></a>    
            
            
              <img src={Todo} />
                  <h4>Task List</h4>
                  <span>REACT STYLED-COMPONENT </span>
                  <a  href={"https://task-list-jfb5v9s12-marfandino.vercel.app/"} target="_blank"><FaLink /></a>    
                  <a href={"https://github.com/MarFandino84/Task-list"} target="_blank" ><FaGithub /></a>    
            
                  <img src={otto} />
                  <h4>Otto Baum</h4>
                  <span>HTML CSS </span>
                  <a  href={"https://otto-baum-kq6j.vercel.app/"} target="_blank" ><FaLink /></a>    
                  <a href={"https://github.com/MarFandino84/OttoBaum"} target="_blank" ><FaGithub /></a>    
            
                  <img src={pastry} />
                  <h4>Grandma Pastry</h4>
                  <span>HTML CSS </span>
                  <a  href={"https://grandma.vercel.app/"} target="_blank"><FaLink /></a>    
                  <a href={"https://github.com/MarFandino84/Grandma"} target="_blank" ><FaGithub /></a>    
            

        </Container>



  </>
  )
}

export default Section3

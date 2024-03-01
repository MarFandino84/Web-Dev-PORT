import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const NavbarStyle = styled.aside`
width: 3em;
position: fixed;
left: 0;
min-height: 100vh;
display: flex; flex-direction: column;
justify-content: space-around;
background-color: black; 
align-items: center;

 p {
     font-size: 1.7em;
     color: #474747; font-weight: 500;
     transform: rotate(270deg);
     transition: 0.7s ease;
&:hover {
    color: var(--yellowback);
    scale: 1.01;
    margin-left: 2.5em;
    transform: rotate(360deg);
    font-weight: 800;
}
 }

`

export const NavlinkStyle = styled(NavLink)`

     font-size: 1.7em;
     color: #474747; font-weight: 500;
     transform: rotate(270deg);
     text-decoration: none;
     transition: 0.7s ease;
&:hover {
     text-decoration: underline;
     color: var(--yellowback);
}
     
&.active {
    color: var(--yellowback);
    scale: 1.01;
    margin-left: 2.5em;
    transform: rotate(360deg);
    font-weight: 800;
    filter: opacity(0.5);
}

`
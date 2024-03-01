import { keyframes } from "styled-components"
import styled  from "styled-components"


export const ContainerHero = styled.div`
max-width: 80vw; display: flex; flex-direction: row;


@media (max-width: 541px) {
    display: flex; 
    margin: 3em 8em;
    flex-wrap: wrap;
    max-height: 90vh;
    

}

`


const BrackAnimation = keyframes`
0% {
    transform: scale(1);
    color: var(--yellowback);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`
export const Brack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-bottom: 0;
  
  
  span {
  display: inline-block;
  margin: 0 5px;
  
  animation: ${BrackAnimation} 2s infinite ease-in-out;
  }

 span:nth-child(2) {
  animation-delay: 0.75s;
  }
  span:nth-child(3) {
    animation-delay: 0.5s;
  }
 

`


export const Span1 = styled.h4`
 
font-size: clamp(20px, 2em, 6em);
min-width: 6em;
align-items: baseline;
flex-direction: row-reverse;
display: flex; 
@media (max-width: 541px) {
  justify-content:center;
}
`
export const Span2 = styled.h4`
color: var(--fontColor);
font-size: clamp(25px, 2.4em, 3em);
align-self: last baseline;
display: flex;
align-items: last baseline;
margin-left: 40px;

`


const spanAnimation = keyframes`
 0%   {opacity: 0; left:10px; }
100% {opacity: 1; left:10px; color: yellow}

`
export const SpanStyle = styled.span`
font-weight: 500; 
animation: ${spanAnimation} 5s infinite ease-in-out;
`


export const DescriptionStyle = styled.p`
font-size: 2.5em;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
text-align: center;
overflow-wrap: normal;
width: 80vw; color: var(--fontColor);
`

export const ImgStyle = styled.img`
border-radius: 100%; object-fit: cover;
width: 21em; min-height: fit-content;
border-left: 18px solid var(--yellowback);
@media (max-width: 541px) {
    width: 40vw;
    left: 15em;
}
`

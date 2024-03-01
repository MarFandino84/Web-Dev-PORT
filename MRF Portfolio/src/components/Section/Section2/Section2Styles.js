import styled from "styled-components";



export const TitleStyle = styled.p`
font-size: clamp(1em, 2em, 5em);
margin-left: 2em;
text-align :start ;
display: flex; align-items: first baseline;
justify-content: center;
flex-wrap: wrap;
color: var(--fontColor);
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export const ContainerTech = styled.div`
display: grid;
grid-template-columns: repeat(4 , 2fr);
gap: 1em;

@media (max-width: 662px) {
    margin-left: 2em;
    display: grid; grid-template-columns: repeat(2, 1fr);
    img {
     max-width: 3em;
     min-height: 6em;    
    }
}

img {
     object-fit: cover;
     image-rendering: optimizeQuality;
     aspect-ratio: 1 / 1 ;
     opacity: 0.2;
     max-width: 8em;
     min-height: 8em;
 
&:hover {
     opacity: 1;
     transition: 1s;
}     
}

`
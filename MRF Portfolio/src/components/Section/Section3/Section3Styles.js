import styled, { keyframes } from "styled-components";

export const Container = styled.div`
width: 75vw; height: auto;
display: flex; flex-direction: column;
justify-content: space-between; align-items: center;
padding: 2em 0;

h4 {
     color: white; font-weight: 650; font-size: 1.5em;
     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     text-align: center;
}
span {
     color: var(--yellowback);
     text-align: center;
}

a {
    color: white; margin-top: 0.5em;
:hover {
     scale: 1.025;
     color: var(--yellowback);
}     
}

img {
     width: 65vw; height: auto;
     object-fit: cover;
     margin: 2em 0.5rem;
     border: 1px solid white;
}

`


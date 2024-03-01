import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root { 
     --yellowback : #ecdb54;
     --fontColor: #dbdbd7;
}

body {
    margin: 0; padding: 0;
    box-sizing: border-box;
    background: #404041;
   
    
}
html {
     scroll-behavior: smooth;
}
`
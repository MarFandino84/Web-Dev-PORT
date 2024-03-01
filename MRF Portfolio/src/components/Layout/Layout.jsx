import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'


const LayoutStyled = styled.div`
min-height: 100vh;
display: flex; justify-content: center; align-items: center;
flex-direction: column;
    

`


const Layout = ({children}) => {
  return (
    <>

    <Navbar />
    <LayoutStyled>{children}</LayoutStyled>


    </>
  )
}

export default Layout

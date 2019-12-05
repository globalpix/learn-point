import React from "react"
import styled from "styled-components"

const Footer = () => {
    return (   
        <>          
          <Container>
            <Copyright>Poweres by Eficace Consultoria</Copyright>        
          </Container>
            
        </> 
      )      
}
const Container = styled.footer`
display: flex;
min-height:20vh;
background:#241c2b;
`
const Copyright = styled.p`
color:#dcbbf9;
padding:0.5em;
`

export default Footer
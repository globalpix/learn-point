import React from "react"
import styled from "styled-components"

const Footer = () => {
    return (   
                
          <Container>
            <Copyright>Powered by Eficace Consultoria</Copyright>        
          </Container>
            
       
      )      
}
const Container = styled.footer`
max-height:10vh;
width:100vw;
background-color:#241c2b;
padding:0.5em;
`
const Copyright = styled.p`
color:#dcbbf9;

`

export default Footer
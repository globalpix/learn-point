import React from "react"
import styled from "styled-components"

const MenuLessons = () => {
    return (   
        <>
          
          <Container>
            <h2>Lições</h2>
          </Container>
            
        </>
      )
}

const Container = styled.aside`
background:#534261;

display: flex;
felx-direction:column;
flex-wrap: wrap;
min-width:250px;
padding:8px 8px;
`

export default MenuLessons
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Menu = () => {
    return ( 
      <Content>
          <Container>
            <TitleHead>Bling</TitleHead>       
            <SubTitle to="/bling/">Início</SubTitle>
            <SubTitle to="/bling/cadastros">Cadastros</SubTitle>
            <SubTitle to="/bling/suprimentos">Suprimentos</SubTitle>
            <SubTitle to="/bling/vendas">Vendas</SubTitle>
            <SubTitle to="/bling/financas">Finanças</SubTitle>
            <SubTitle to="/bling/preferencias">Preferências</SubTitle> 
          </Container>
          <p></p>
          <Container>
            <TitleHead>XTech</TitleHead>
          </Container>
      </Content>            
        
      )
}

const Content = styled.aside`
background:#335566;
position:fixed;
flex:1;
display: flex;
flex-direction:column;
width:16vw;
padding:0.5em 0.5em 0 0.5em;
min-height:70vh;
margin-bottom:2vh;
margin-top:10vh;
border-bottom:0.5vh solid #dcbbf9;
overflow:auto;
`
const Container = styled.nav`
background:#182328;
width:100%;
width:14vw;
`

const TitleHead = styled.div`
color:#b1d9ed;
width:100%;
padding:0.1em 0.2em;
text-transform:uppercase;
margin:0;
`
const SubTitle = styled(props => <Link {...props} />)`
display:block;
color:#b1d9ed;
font-size:0.8em;
margin:0.2em 1em;
text-transform:uppercase;
text-decoration:none;
:hover{
  color:#ffffff;
},
`

export default Menu
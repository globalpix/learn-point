import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <Container>
      <Title to="/">{siteTitle}</Title>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const Container = styled.header`
background-color: #335566;
position:fixed;
top:0;
border-bottom:0.25vh solid #b1d9ed;
width:100vw;
height:10vh;
`
const Title =  styled(props => <Link {...props} />)`
color:#b1d9ed;
font-size:1.618em;
padding: 0.5em 0em 0.25em 0.5em;
text-decoration: none;
text-transform:uppercase;
line-height:10vh;
`
export default Header

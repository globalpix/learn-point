import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <Container>
      <Title to="/"><h1>{siteTitle}</h1></Title>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const Container = styled.header`
display: flex;
flex-direction:row;
background-color: #53376D;
max-height:15vh;
justify-content:flex-start;
`
const Title =  styled(props => <Link {...props} />)`
color: #FFFFFF;
display:flex;
felx-direction:column;
padding: 1em 0em 0em 0.5em;
text-decoration: none;
justify-content:center;
text-transform:uppercase;
`
export default Header

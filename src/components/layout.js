/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./default.css"
import styled from "styled-components"

import Header from "./header"
import MenuLessons from "./menulessons"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (   
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <MenuLessons></MenuLessons>
        <Main>{children}</Main>
      </Container>
      <Footer></Footer>     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Container = styled.div`
  display: flex;
  background:#241c2b;
  height:70vh;
  `
 
const Main = styled.main`
  padding:0.8em;
`

export default Layout

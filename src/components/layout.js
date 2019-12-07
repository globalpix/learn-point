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
import Menu from "./menu"
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
      <Content>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Menu/>
        <Main>{children}</Main>        
        <Footer/>
      </Content>          
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Content = styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  
  min-height:100vh;
  height:auto;
  `
 
const Main = styled.main`
  padding:11vh 0 0 18vw;
  width:84vw;
  min-height:75vh;
  height:100%;
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
`

export default Layout

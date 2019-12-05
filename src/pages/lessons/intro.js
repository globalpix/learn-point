import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Intro = () => (
  <Layout>
    <SEO title="Introdução" />
    <h1>Introdução</h1>
    
    <Link to="/">Voltar para o ínicio</Link>
  </Layout>
)

export default Intro

import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Suprimentos = () => (
  <Layout>
    <SEO title="Bling - Suprimentos" />
    <h2>Suprimentos</h2>
    <h4>Controle de estoques</h4>
    <h4>Pedidos de Compras</h4>
    <h4>Nota de entrada</h4>
    <h4>Relatórios</h4>      
    <Link to="/bling/">Bling</Link>
  </Layout>
)

export default Suprimentos

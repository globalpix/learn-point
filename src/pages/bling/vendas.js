import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Vendas = () => (
  <Layout>
    <SEO title="Bling - Vendas" />
    <h2>Vendas</h2>
    <h4>Pedidos de vendas</h4>
    <h4>Notas fiscais</h4>
    <h4>Pedidos de vendas múltiloja</h4>
    <h4>Relatórios</h4>      
    <Link to="/bling/">Bling</Link>
  </Layout>
)

export default Vendas

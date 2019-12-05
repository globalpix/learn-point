import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Cadastros = () => (
  <Layout>
    <SEO title="Bling - Cadastros" />
    <h2>Cadastros</h2>
    <h4>Clientes e fornecedores</h4>
    <h4>Produtos</h4>
    <h4>Vendedores</h4>
    <h4>Relatórios</h4>      
    <Link to="/bling/">Bling</Link>
  </Layout>
)

export default Cadastros

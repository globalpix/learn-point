import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Financas = () => (
  <Layout>
    <SEO title="Bling - Finanças" />
    <h2>Finanças</h2>
    <h4>Caixa e bancos</h4>
    <h4>Contas a pagar</h4>
    <h4>Contas a receber</h4>
    <h4>Remessas e retornos</h4>
    <h4>Ficha financeira</h4>
    <h4>Relatórios</h4>      
    <Link to="/bling/">Bling</Link>
  </Layout>
)

export default Financas

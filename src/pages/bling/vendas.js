import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Vendas = () => (
  <Layout>
    <SEO title="Bling - Vendas" />
    <h2>Vendas</h2>
    <h4>Frente de caixa</h4>
    <h4>GNRE</h4>
    <h4>Integrações Logísticas</h4>
    <h4>NFC-e</h4>
    <h4>Propostas Comerciais</h4>
    <h4>Pedidos de vendas</h4>
    <h4>Notas fiscais</h4>
    <h4>Comissões</h4>
    <h4>Checkout de pedidos de vendas</h4>
    <h4>Pedidos de vendas múltiplas</h4>
    <h4>Relatórios</h4>      
    <Link to="/bling/">Bling</Link>
  </Layout>
)

export default Vendas

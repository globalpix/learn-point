import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Cadastros = () => (
  <Layout>
    <SEO title="Bling - Cadastros" />
    <h1>Cadastros</h1>
    <h3>- Clientes e Fornecedores</h3>
    <h3>- Produtos</h3>
      <h4>Visão geral</h4>
      <p>O Bling possui cadastro de produtos e serviços, 
        com todas as informações para emissão de notas fiscais, 
        controle de estoque, pedidos de venda, 
        ordens de compra e ordens de serviço. 
        Você também pode Exportar e Importar os produtos via planilha e 
        também clonar produtos já cadastrados.</p>
        <p>Para incluir um contato, você deve acessar "Cadastros > Produtos > Incluir um produto".</p>
        <img src="https://manuais.bling.com.br/images/201907264938808f8b059da07e0a746f93a60240328b.07" wdth="100%"/>
        <h4>Dados gerais</h4>
        <p>Informe obrigatoriamente a descrição, esta descrição será o nome do produto. </p>
        <p>Informe <b>o código (SKU)</b> - se o parâmetro "Código do produto" em "Preferências > Cadastros > Configurações de produtos" for Manual, você poderá preencher, caso contrário o código seguirá a sequencia escolhida no parâmetro.</p>
        <p>Selecione o tipo:</p>
        <ul>
          <li>Produto</li>
        </ul>
        <p>Selecione o formato do produto:</p>
        <ul>
          <li>Simples</li>
          <li>com variações </li>
        </ul>
    <h3>- Vendedores</h3>
    <h3>- Relatórios</h3>      
    <Link to="/bling/">Bling</Link>
  </Layout>
)

export default Cadastros

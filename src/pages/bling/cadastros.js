import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import imgdadosgerais from "../../images/produtos-dados-gerais.png"
import imgcarcteristicas from "../../images/produtos-carcteristicas.png"
import imgestoque from "../../images/produtos-estoque.png"

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
        <img src="https://manuais.bling.com.br/images/201907264938808f8b059da07e0a746f93a60240328b.07" alt="capture" />
        <h4>Dados gerais</h4>
        <img src={imgdadosgerais} alt="dados gerais" />
        <p>Informe obrigatoriamente a descrição, esta descrição será o nome do produto. </p>
        <p>Informe <b>o código (SKU)</b> - se o parâmetro "Código do produto" em "Preferências > Cadastros > Configurações de produtos" for Manual, você poderá preencher, caso contrário o código seguirá a sequencia escolhida no parâmetro.</p>
        <p>Selecione o tipo:</p>
        <ul>
          <li>Produto</li>
        </ul>
        <p>Selecione o formato do produto:</p>
        <ul>
          <li>Simples</li>
        </ul>
        <p>Informe o preço de venda;</p>
        <p>Informe a unidade - exemplos: Un, Kg e Pç;</p>
        <p>Selecione a situação: (a situação pode ser alterada em massa na tela de cadastro do produtos utilizando a ação "Mudar situação de produtos selecionados")</p>
        <ul>
          <li>Ativo</li>
          <li>Intivo</li>
        </ul>
        <h4>Características</h4>
        <img src={imgcarcteristicas} alt="carcteristicas de produtos" />
        <p>Se for um produto, será disponibilizado para preenchimento as características:</p>
        <p><b>Peso líquido</b> e  <b>bruto</b> - em Kg</p>
        <p><b>Volumes</b></p>
        <p><b>Itens por caixa</b> - Quantidade de itens por caixa/embalagem</p>
        <p><b>Largura, altura e profundidade</b></p>
        <p><b>Unidade de medida</b> - utilizada nos campos de largura, altura e profundidade</p>
        <p><b>GTIN/EAN</b> - Código GTIN (GTIN-8, GTIN-12, GTIN-13 ou GTIN-14) do produto que está sendo comercializado</p>
        <p><b>GTIN/EAN tributário</b> - Código GTIN (GTIN-8, GTIN-12 ou GTIN-13) da menor unidade comercializada no varejo</p>
        
        <p><b>Produção</b></p>
        <ul>
          <li>própria</li>
          <li>terceiros</li>
          <li>Data de validade;</li>
        </ul>
        <p><b>Condição</b></p>
        <ul>
          <li>Não especificado</li>
          <li>Novo</li>
          <li>Usado</li>
        </ul>
        <p><b>Frete grátis </b>- sim ou não</p>
        
        
        <h4>Estoque</h4>
        <img src={imgestoque} alt="estoque" />

    <h3>- Vendedores</h3>
    <h3>- Relatórios</h3>      
    <Link to="/bling/">Bling</Link>
  </Layout>
)

export default Cadastros

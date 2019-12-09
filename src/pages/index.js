import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Bling - O que é o Bling?" />
    <Content>
    <h2>O que é o Bling?</h2>
    
      <iframe title="Bling" width="960" height="489" src="https://www.youtube.com/embed/7FW_o1bXKjw?list=WL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    <p>O Bling é um sistema de gestão online que ajuda a administrar o seu negócio de
forma simples e rápido, tornando a gestão da sua empresa uma tarefa muito mais fácil.</p>
<p> Com o Bling você poupa tempo e ganha dinheiro, 
com ele você emite notas fiscais para o seu cliente, 
fazendo os cálculos impostos de forma automática.</p>
<p>Integra o seu comércio eletrônico nas
melhores plataformas de comércio do país.</p>
<p>Organize o estoque controlando a movimentação de estoque, interaja com o
sistema de entrega dos correios, imprima
etiquetas gerando o código de barras,
para enviar e rastrear todas as suas
vendas em apenas um clique. </p> 
<p>Com o bling você também pode gerenciar as suas
rendas e comissões de vendedores, além de
criar e enviar o orçamento diretamente
para os clientes.</p>
<p>Agilize a operação de frente de caixa usando códigos de barras
e outras funcionalidades. </p> 
<p>Cadastre e consulte seu registro de clientes, produtos, 
fornecedores e vendedores.</p>
<p>Cuide da saúde financeira sabendo tudo
que entra e sai da sua empresa em tempo
real.
    </p>
    </Content>
  </Layout>
)
const Content = styled.div`
  display: block;
  `
export default IndexPage

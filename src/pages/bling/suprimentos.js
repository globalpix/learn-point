import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Suprimentos = () => (
  <Layout>
    <SEO title="Bling - Suprimentos" />
    <h2>Suprimentos</h2>
    <h3>- Controle de estoques</h3>
    <h4>Visão geral</h4>
    <p>Através do módulo de estoque é possível controlar o estoque da sua empresa pode se tornar uma tarefa descomplicada.</p>
    <iframe title="Controle de estoque" width="960" height="480" src="https://www.youtube.com/embed/n2sKX445TAk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h4>Lançamentos de estoque</h4>
    <p>Após logar no Bling, acesse <b>"Suprimentos -> Controle de Estoques".</b></p>
    <img src="https://manuais.bling.com.br/images/201712085808d0809b68882a581e5a74369aa3413b92.png" alt="Cadastro de fornecedores" />
    <p>Ou <b>"Cadastros -> Produtos",</b> para acessar diretamente o produto desejado.</p>
    <img src="https://manuais.bling.com.br/images/201712085830ce78ad35908ae88cb35dc8b19249824e.png" alt="Cadastro de fornecedores" />
    <p>Em controle de estoques:</p>
    <img src="https://manuais.bling.com.br/images/201805172223a3a715099c24e1bf3f18fddc4afab30d.png" alt="Cadastro de fornecedores" />
    <ul>
      <li>1 - Digite o nome do produto que queira verificar o estoque.</li>
      <li>2 - Lista de entradas e saídas do produto selecionado.</li>
      <li>3 - Incluir lançamentos ao estoque.</li>
      <li>4 - Total de entradas.</li>
      <li>5 - Total de saídas.</li>
      <li>6 - Número total de itens em estoque.</li>
      <li>7 - Volta para tela de produtos(figura 2).</li>
    </ul>

    <img src="https://manuais.bling.com.br/images/2018051723240588473b895c7de3017a72e835677af9.png" alt="Novo lançamento" />
    <p>Tipo entrada: Para entrada de produtos.</p>
    <p>Tipo saída: para saída de produtos.</p>
    <p>Tipo balanço: Para atualizar o estoque em caso de balanço, de disparidades no estoque ou saldo inicial.</p>
    <p>Quantidade: Quantidade de produtos para entrada ou saída.</p>
    <p>Preço unitário: Preço unitário dos produtos.</p>
    <p>Observação: Observações dos produtos.</p>
    
    <h4>Observações</h4>
    <p>Sempre que for gerar NFe ou pedidos de compra-venda, lembre-se de "Lançar estoque" para manter o sistema atualizado.</p>
    <img src="https://manuais.bling.com.br/images/2018051724120021deeee88e812dfde6f7c5e1158b58.png" alt="Novo lançamento" />
    <p>O estoque mínimo pode ser definido no momento do cadastro do produto."Cadastro -> Produtos -> Incluir um Produto".</p>
    <img src="https://manuais.bling.com.br/images/20180517250708da68ec5b56028f89a38fe2fb5c1e3d.png" alt="Novo lançamento" />
    <p>A cada produto adicionado em um pedido de "entrada/saída", um informativo do estoque será mostrado.</p>
    <p>Para pedidos de compra, vá em "suprimentos> pedidos de compra> incluir  pedido"</p>
    <img src="https://manuais.bling.com.br/images/20180517451385db87142b67066eabd5608882e44e16.png" alt="Novo lançamento" />
    <p>Para pedidos de venda, vá em <b>"Vendas> pedidos de venda> incluir pedido".</b></p>
    <img src="https://manuais.bling.com.br/images/201805174644f14e9295d6fe775f38269e861577054d.png" alt="Novo lançamento" />
    
    <h4>Estoque reservado</h4>
    <p>O recurso de estoque reservado permite considerar os pedidos de venda em aberto (Em Aberto, Em Andamento e Em Digitação) na obtenção do saldo em estoque.</p>
    <p>Para habilitar esse recurso acesse Preferências > Suprimentos > Estoque e marque a opção Considerar vendas em aberto (Em aberto, Em Andamento e Em Digitação) para obter o saldo atual em estoque.</p>
    <p>Com essa opção habilitada, o saldo atual utilizado pelo sistema será o saldo real em estoque do produto menos o estoque reservado das vendas em aberto.</p>

    <h3>Registro das compras</h3>
    <h4>Visão geral</h4>
    <p>Importe as notas fiscais de fornecedores e automatize a entrada de produtos no seu estoque. Dessa forma, o tempo que seria gasto na inserção manual de produtos no estoque, poderá ser utilizado na execução de outras tarefas de gestão do seu negócio</p>
    <h4>Como incluir compra</h4>
    <p>Após logar no Bling, acesse <b>"Suprimentos -> Pedidos de Compras -> Incluir Pedido".</b></p>
    <img src="https://manuais.bling.com.br/images/2018051757595f187da8870bf5ad3b133669976f53f7.png" alt="Novo lançamento" />
    <p></p>
    <img src="https://manuais.bling.com.br/images/201805171142d67b154d463ac02182a23dfba0fef950.png" alt="Novo lançamento" />
    <p>Preencha os dados do Pedido, e Salve.</p>

    <h4>Como visualizar e Gerenciar os Pedidos de Compra</h4>
    <p>Em <b>"Suprimentos -> Pedidos de Compra -> Outras Opções"</b></p>
    
    <img src="https://manuais.bling.com.br/images/201805171327867bbb62e6eec764e3d4e15db5d7c16c.png" alt="Novo lançamento" />
    <p>Opções de Compras.</p>

    <h4>Clonar Compra:</h4>
    <p>Gera outro pedido de Compra exatamente igual ao primeiro.</p>
    <p>Exemplo: Gera o mesmo pedido, mas de outro fornecedor.</p>

    <h4>Gera nota Fiscal:</h4>
    <p>Sistema Gera Nota Fiscal de Compra de Mercadorias.</p>

    <h4>Lançar Contas:</h4>
    <p>Envia o <b>"pedido para -> contas"</b> a pagar ou caixa.</p>

    <h4>Enviar por Email:</h4>
    <p>Envia pedido de Compra por Email.</p>

    <h4>Imprimir:</h4>
    <p>Imprimir pedido de Compra.</p>

    <h4>Atendido:</h4>
    <p>Compra Realizada.Situação muda para Atendido.</p>


    <h4>Em Aberto:</h4>
    <p>Compra ainda não Realizada.Situação em Aberto.</p>

    <h4>Cancelado:</h4>
    <p>Cancela Pedido de Compra.Situação muda para Cancelado</p>
 
    <Link to="/bling/">Bling</Link>
  </Layout>
)

export default Suprimentos

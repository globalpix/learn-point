import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Vendas = () => (
  <Layout>
    <SEO title="Bling - Vendas" />
    <h2>Vendas</h2>
    <h3>Pedidos de vendas</h3>

    <h4>Incluir Pedido de Venda</h4>
    <p>Após logar no Bling, acesse "Vendas > Pedidos de Venda".</p>
    <img src="https://manuais.bling.com.br/images/201805155519f24be994aebb8dfd43d0815ccce54162.png" alt="Novo lançamento" />
    
    <p>Para incluir novo pedido clique em "Incluir um pedido", conforme imagem abaixo.</p>
    <img src="https://manuais.bling.com.br/images/201805172353f97aa2f7ac5ac3fbaf37a133eff8746c.png" alt="Novo lançamento" />

    <p>Ao abrir o pedido, preencha:</p>
    <p>1.<b> Dados da venda:</b> cliente, vendedor e loja a que pertence (para criar lojas acesse "Preferências > Integrações > Configurações de Integração com Lojas Virtuais e Marketplaces") Se já estiverem cadastrados os dados serão preenchidos automaticamente, a busca poderá ser digitando os primeiros caracteres ou clicando na lupa.</p>
    <p>2. Inclua ou selecione itens (produtos ou serviços).</p>
    <p>3. Nos <b>totais</b> você poderá adicionar desconto, valor do frete e prazo de entrega.</p>
    <p>4. Nos <b>detalhesda venda</b>  poderá informar data prevista de faturamento e número da ordem de compra se houver.</p>
    
    <img src="https://manuais.bling.com.br/images/2018051748593ca06d5393ae9265fea64baeab13c899.png" alt="Novo lançamento" />
    <p>Clicando no lápis ao lado do nome do cliente abrirá as informações referente ao seu cadastro que poderão ser editados.</p>
    
    <p>Ao editar os dados eles serão alterados no cadastro de clientes.</p>
    <img src="https://manuais.bling.com.br/images/201805172751049504f2d131ba5e30e7bbc96504bce6." alt="Novo lançamento" />
    
    <p>Você define o tipo de pessoa no campo 1 e sua relação no cadastro de contribuintes no campo 2.</p>
    <img src="https://manuais.bling.com.br/images/201805173519f24960ef322c6caedba3e5526778ff29.png" alt="Novo lançamento" />
    <p></p>
    <img src="https://manuais.bling.com.br/images/20180517374690e46ecbfcd9ce8483bd49f2704bb722.png" alt="Novo lançamento" />

    <p>Clicando na info ao lado do nome abrirá a informação referente às "Últimas registros de vendas ", aparecerá o histórico das vendas por produtos e histórico financeiro.</p>
    <img src="https://manuais.bling.com.br/images/201805175845b80fc9fcba16c27e6ef2be320bfa7258.png" alt="Novo lançamento" />
    <p></p>

    <img src="https://manuais.bling.com.br/images/2018051700250203ac6f5a10091345b89c7468312ffa.png" alt="Novo lançamento" />
    <p>Você também pode inserir os itens do pedido, poderá incluir novo (será incluído no cadastro de produtos, onde poderá preencher os demais dados se necessário) ou realizar a busca no cadastro de produtos digitando os primeiros caracteres. </p>
    <p></p>
    <img src="https://manuais.bling.com.br/images/20180517045571294fffe307700e3e127a86138a4720.png" alt="Novo lançamento" />

    <p>Clicando no ícone em lápis abrirá os dados referente aos componentes que formam o produto se for um produto com estrutura (kits), você poderá adicionar outros componentes.</p>
    <img src="https://manuais.bling.com.br/images/20151400000000.jpg" alt="Novo lançamento" />
    <p>Ao clicar na info ao lado do item abrirá a tela informando as "Últimas vendas deste produto para este cliente".</p>
    
    
    
    <h3>Notas fiscais</h3>
    
    <h3>Pedidos de vendas múltiloja</h3>
    <h3>Relatórios</h3>      
    <Link to="/bling/">Bling</Link>
  </Layout>
)

export default Vendas

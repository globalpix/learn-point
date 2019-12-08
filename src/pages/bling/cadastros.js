import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import imgdadosgerais from "../../images/produtos-dados-gerais.png"
import imgcarcteristicas from "../../images/produtos-carcteristicas.png"
import imgestoque from "../../images/produtos-estoque.png"
import imgfornecedor from "../../images/produtos-fornecedor.png"
import imgtributacao from "../../images/produtos-tributacao.png"



const Cadastros = () => (
  <Layout>
    <SEO title="Bling - Cadastros" />
    <h1>Cadastros</h1>
    <h3>- Fornecedores</h3>
    <p>O Bling possui cadastro de clientes e fornecedores, nacionais e estrangeiros, com todas as informações necessárias para emissão de notas e boletos. Permite a impressão da sua lista de contatos, exportação através de planilhas padrão e exclusão. Você ainda pode enviar e-mails para clientes selecionados, imprimir etiquetas e lista de aniversariantes.</p>
    <p>Para incluir um contato, você deve acessar "Cadastros > Clientes e Fornecedor > Incluir um cadastro".
Informe os "Dados Cadastrais"</p>
    <img src="https://manuais.bling.com.br/images/201805182003c19cea4f1104a8f74d5e2dda2d6f47f0.png" alt="Cadastro de fornecedores" />
    <p>Defina o Tipo de Pessoa:</p>
    <ul>
      <li><b>Jurídica</b> - se tiver IE Isenta, clique na informação "IE Isento", contida ao lado do campo Inscrição Estadual</li>
      <li><b>Física</b>- será exibido o campo RG</li>
      <li><b>Estrangeiro</b>- será exibido o campo país</li>
    </ul>

    <p>Informe no campo Contribuinte a modalidade do seu cliente:</p>
    <ul>
      <li><b>1 - Contribuinte ICMS</b> - Pessoas jurídicas e físicas que possuem Inscrição estadual normalmente se enquadram nesse caso.</li>
      <li><b>2 - Contribuinte isento de Inscrição no Cadastro de Contribuintes:</b>Contribuintes isentos de Inscrição Estadual se encaixam nesse caso. Não confundir com ausência de Inscrição Estadual.</li>
      <li><b>9 - Não contribuinte, que pode ou não possuir Inscrição Estadual no Cadastro de Contribuintes: </b>Normalmente pessoas físicas e estrangeiros se encaixam nesse caso</li>
    </ul>

    <img src="https://manuais.bling.com.br/images/2018051806179ea667665b8c58d374340cc177702275.png" alt="Cadastro de tipo de pessoa" />
    <p>
    Informe o "Endereço"
    <b>Geral:</b> Informe o CEP e clique na lupa, as informações do endereço serão incluídas automaticamente e provém dos Correios. Complete com as informações necessárias.
    <b>Endereço de cobrança:</b> Se estiver preenchido um endereço de cobrança os boletos serão gerados automaticamente para este endereço.
    </p>

    <img src="https://manuais.bling.com.br/images/20180514573747e20f4b05428d9676d7f10b95f5ad67.png" alt="Endereço" />


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
        <p><b>Mínimo</b> - essa informação serve para definir o estoque mínimo do produto, nas ações que envolvem estoque será mostrado o indicador de estoque mínimo</p>
        <p><b>Máximo</b> - essa informação define o estoque máximo, assim como o estoque mínimo, nas ações que envolvem o estoque será mostrado o estoque máximo</p>
        <p><b>Crossdocking</b> - Quantidade de dias para o processo de distribuição em que a mercadoria recebida é redirecionada ao consumidor final sem uma armazenagem prévia</p>
        <p><b>Localização</b> - define a localização do produto no estoque.</p>

        <h4>Fornecedor</h4>
        <img src={imgfornecedor} alt="estoque" />
        <p><b>Descrição do fornecedor</b> - é a descrição do produto no fornecedor</p>
        <p><b>Fabricante</b> - vincula um contato ao produto definindo como seu fabricante</p>
        <p><b>Crossdocking</b> - Quantidade de dias para o processo de distribuição em que a mercadoria recebida é redirecionada ao consumidor final sem uma armazenagem prévia</p>
        <p><b>Localização</b> - define a localização do produto no estoque.</p>

        <h4>Tributação</h4>
        <img src={imgtributacao} alt="tributação" />
        <p><b>Origem</b> - origem do produto conforme o ICMS</p>
        <p><b>NCM</b> - exemplo: 1001.10.10</p>
        <p><b>CEST</b> - Código Especificador da Substituição Tributária, utilizado nas operações com substituição tributária</p>
        <p><b>Tipo do item</b> - Utilizado na geração do SPED - PIS/COFINS</p>
        <p><b>% Tributos</b> - Alíquota de valor aproximado dos tributos</p>
        <p>Valor base ICMS ST para retenção, Valor ICMS ST para retenção e Valor ICMS próprio do substituto  - Esses campos devem ser preenchidos com o valor a ser utilizado para retenção do ICMS ST na venda, por unidade</p>

        <p><b>Valor PIS fixo e Valor COFINS fixo </b> - Preencher somente quando possuir valor fixo por unidade</p>
    <h3>- Relatórios</h3>      
    <Link to="/bling/">Bling</Link>
  </Layout>
)

export default Cadastros

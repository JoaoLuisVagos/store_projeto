# Vitrine de Produtos

Este projeto é uma vitrine de produtos desenvolvida com React e `react-bootstrap`. A aplicação exibe uma lista de produtos com opção de adicionar ao carrinho, limpar o carrinho e visualizar os itens do carrinho.

## Funcionalidades

- Exibição de produtos com imagem, nome e preço.
- Preço com desconto é mostrado quando aplicável.
- Adicionar produtos ao carrinho.
- Limpar o carrinho.
- Exibir um toast para ações importantes como adicionar e limpar itens do carrinho.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [react-bootstrap](https://react-bootstrap.github.io/)
- [react-toastify](https://fkhadra.github.io/react-toastify/)
- [Bootstrap](https://getbootstrap.com/)

## Requisitos

- Node.js (versão 14 ou superior)
- Yarn ou npm

## Configuração do Projeto

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/JoaoLuisVagos/store_projeto.git
   ```

2. **Navegue até o Diretório do Projeto**
   ```bash
   cd store_projeto
   ```
3. **Instale as Dependências**
   ```bash
   yarn install
   ```

## Executar o Projeto

- Para iniciar o servidor de desenvolvimento e ver a aplicação no navegador:
  ```bash
  yarn start
  ```

## Estrutura do Projeto

- **`src/`**: Contém o código-fonte da aplicação.

  - **`App.js`**: Componente principal da aplicação, responsável pela renderização da vitrine de produtos e gerenciamento do carrinho.
  - **`index.js`**: Ponto de entrada da aplicação. Renderiza o componente `App` e o monta no DOM.

- **`public/`**: Contém arquivos estáticos que são servidos diretamente pelo servidor.

  - **`index.html`**: Arquivo HTML principal que inclui a estrutura básica da página e o ponto de montagem para o React.

- **`package.json`**: Contém as dependências do projeto, scripts e outras configurações relacionadas ao gerenciamento do projeto.
- **`README.md`**: Documento com instruções sobre o projeto, como configurar, executar e testar a aplicação.
- **`node_modules/`**: Diretório gerado automaticamente pelo gerenciador de pacotes (npm ou Yarn) que contém todas as dependências do projeto.

# Teste Tunts

## Indice

- **[Sobre](#sobre)**
- **[Documentação](#documentação)**
- **[Instalação](#instalação)**

## Sobre

O teste é sobre criar uma aplicação que fará consulta em uma API REST que contém dados de países [restcountries](https://restcountries.com/#api-endpoints-v3-all) e gerar uma planilha xlsx com os dados recebidos.

Preferi utilizar uma abordagem mais clean para construir a aplicação e os endpoints, então usei NodeJS puro com algumas libs auxiliares.

Libs utilizadas: [axios](https://axios-http.com/) para requisições HTTP, [excel4node](https://www.npmjs.com/package/excel4node) para lidar com a parte de planilhas e [dotenv](https://www.npmjs.com/package/dotenv).

## Documentação

### Instruções para baixar e rodar a aplicação

Clone este repositório:  
`$ git clone https://github.com/guigovaski/teste-tunts.git`

Instale as dependências:  
`$ npm install`

Rode o servidor:  
`$ npm run start`

Pronto! a aplicação está pronta para ser acessada.

### Aqui estão todos os endpoits disponíveis na API

Retorna o endpoint raiz da aplicação:  
GET: localhost:3000/

Retorna o endpoint que faz o download do arquivo xlsx com os dados da API:  
GET: localhost:3000/countries

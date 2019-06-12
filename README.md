# GraphQL
> O objetivo desse projeto é aplicar práticas estudadas usando [GraphQL](https://graphql.org/).

## Executar os seguintes passos

> Primeiramente é necessário ter o **node** e o **npm** instalados, para isso basta entrar [nesse site](https://www.npmjs.com/get-npm) e identificar qual a forma de instalar no seu S.O

> Executar o comando `npm i` na raiz do projeto para instalar todas as dependências do projeto.

> Executar o comando `npm i -g knex` para instalar o **knex** de forma global.

> Executar o comando `knex migrate:latest` para aplicar a ultima **migration** ao banco de dados.

> Acessa o diretório */src* e executar o comando `node server.js`

## Comandos úteis

> O comando `knex init` pode ser executado dentro do diretório */src* do seu projeto para criar um arquivo chamado *knexfile.js* que possui as informações de conexão com o banco de dados.

> Para executar o arquivo *database.js* caso queira realizar testes é só executar o **node**, como por exemplo `node config/database.js`.

## Usando o GraphQL
##### Pelo browser é possível executar consultas do seguinte modo:

###### getUsers()
```javascript
{
  getUsers {
    id
    name
    email
    password
  }
}
```
###### Retorno
      {
      "data": {
        "getUsers": [
          {
            "id": "1",
            "name": "Teste",
            "email": "teste@teste.com.br",
            "password": "teste"
          }
        ]
      }
    }

###### getUser(id: 1)
```javascript
{
  getUser(id: 1){
    id
    name
    email
    password
  }
}
```
###### Retorno
    {
      "data": {
        "getUser": {
          "id": "1",
          "name": "Teste",
          "email": "teste@teste.com.br",
          "password": "teste"
        }
      }
    }

##### Podemos realizar persistências da seguinte forma:

```javascript
mutation {
  createUser(input: {
    name: "Guilherme"
    email: "guilherme@teste.com"
    password: "123456"
  }){ 
      /* Inserir os atributos que devem ser retornados 
      após a persistência */
      /* Se esses dados não forem inseredos,
       Por padrão retorno o ID */
    id
    name
  }
}
```
###### Retorono
    {
      "data": {
        "createUser": {
          "id": "2",
          "name": "Guilherme"
        }
      }
    }

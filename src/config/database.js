const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

// Exemplo de inserção no banco de dados

// knex('users').insert({
//     name: "Teste",
//     email: "teste@teste.com.br",
//     password: "teste"
// }).then(data => console.log(data))

// Exemplos de consultas

// knex('users').then(resultado => console.log(resultado))
// knex('users').select("*").then(resultado => console.log(resultado))
// knex('users').first().then(resultado => console.log(resultado))
// knex('users').where({id: 1}).first().then(resultado => console.log(resultado))
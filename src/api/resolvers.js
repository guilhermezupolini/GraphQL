const db = require('../config/database')

module.exports = {
    Query: {
        async getUser(_, { id }) {
            return await db('users').where({ id }).first()
        },

        async getUsersByName(_, { name }) {
            return await db('users').where('name', 'like', '%'+name+'%')
        },

        async getUsers(_, { offset, limit }) {
            return await db('users')
        }
    },

    Mutation: {
        async createUser(_, { input }) {
            const result = await db('users').insert({
                name: input.name,
                email: input.email,
                password: input.password
            })

            const id = result[0]
            return await db('users').where({ id }).first()
        }
    }
}
const {query, insert, update, delet } = require('../database/database')

class User {
    constructor(user) {
        this.name = user.name,
        this.email = user.email,
        this.genero = user.genero
    }

    static async readAll() {
        return await query('SELECT * FROM users')
    }

    static async readById(id) {
        return await query('SELECT * FROM users WHERE id = ?', id)
    }

    async save() {
        const newUser = await insert('users',{
            name: this.name,
            email: this.email,
            genero: this.genero
        })
        // this.idUser = newUser
    }

    static async update(data, id) {
        return await update('users', data, id)
    }

    static async delete(id) {
        return await delet('users', id)
    }
}

module.exports = User
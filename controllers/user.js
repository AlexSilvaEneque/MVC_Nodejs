const User = require("../models/User")

class UserController {
    async getviewUserAll(req, res) {
        const users = await User.readAll()
        return res.render('home', {users: users})
    }

    getViewCreate(req, res) {
        return res.render('create')
    }

    async register(req, res) {
        const newUser = new User(req.body)
        await newUser.save()
        return res.redirect('/')
    }

    async getViewEdit(req, res) {
        let id = req.params.id
        const dataUser = await User.readById(id)
        return res.render('edit', {user: dataUser[0]})
    }

    async update(req, res) {
        let data = req.body
        let id = req.params.id
        await User.update(data,id)
        return res.json(data)
        // return res.redirect('/')
    }

    async delete(req, res) {
        let id = req.params.id
        await User.delete(id)
        return res.json(id)
        // return res.redirect('/')
    }
}

module.exports = UserController
const express = require('express')
const UserController = require('../controllers/user')

const router = express.Router()

const userController = new UserController

router.get('/', userController.getviewUserAll)

router.get('/create', userController.getViewCreate)

router.post('/save', userController.register)

router.get('/edit/:id', userController.getViewEdit)

router.put('/update/:id', userController.update)

router.delete('/delete/:id', userController.delete)

module.exports = router
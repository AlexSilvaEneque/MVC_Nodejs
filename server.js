const express = require('express')
const { port } = require('./config')
const { create } = require('express-handlebars')
const path = require('path')
const router = require('./routes/user')

const app = express()

const hbs = create({
    extname: ".hbs",
    defaultLayout: null
})

app.engine('hbs', hbs.engine)
app.set('view engine','hbs')
app.set('views','./views')

app.use(express.static(path.join(__dirname, "static")))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)

app.listen(port, () => {
    console.log('😀 ... http://localhost:'+port)
})
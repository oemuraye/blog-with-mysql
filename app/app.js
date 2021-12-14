const express = require('express')
const app = express()
const routes = require('./routes.js')
const DB = require('../database/connection')
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.use('/', routes )


app.listen(3000, () => {
    console.log(` server started on port `)
  })
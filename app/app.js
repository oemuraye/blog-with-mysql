const express = require('express')
const app = express()
const routes = require('./routes.js')
const DB = require('../database/connection')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(methodOverride('_method'))


PORT = process.env.PORT;

app.use('/', routes)


app.listen(PORT, () => {
  console.log(` server started on port ${PORT} `);
});
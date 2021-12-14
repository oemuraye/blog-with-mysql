
const express = require('express')
const DB = require('../database/connection')
const router = express.Router()

router.get('/', (req, res) => {
    DB.query(`SELECT * FROM blogs`, (err, blogPost) => {
        if (err) {
            console.log(err)
        } else {
            res.render('home.ejs', {blogPost})
        }
    })
})
router.get('/show/:id', (req, res) => {
    const id = req.params.id
    DB.query(`SELECT * FROM blogs WHERE id = ${id} LIMIT 1`, (err, blog) => {
        if (err) {
            console.log(err)
        }
        return res.render('show.ejs', {blog})
    })
})


module.exports = router



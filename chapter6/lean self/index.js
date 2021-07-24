// index.js
const express = require('express')
const app = express()
const port = 8080
const { Article } = require('./models')

app.use(express.json())
// GET all articles
app.get('/articles', (req, res) => {
    Article.findAll()
        .then(articles => {
            res.status(200).json(articles)
        })
})
// GET article by ID
app.get('/articles/:id', (req, res) => {
    Article.findOne({
        where: { id: req.params.id }
    })
        .then(article => {
            res.status(200).json(article)
        })
})

//post on article module
app.post('/articles', (req,res) => {
    Article.create({
        title: req.body.title,
        body: req.body.body,
        approved: req.body.approved
    })
    .then(article => {
        res.status(201).json(article) 
    }).catch(err => {
        res.status(422).json("CANT CREATE ARTICLE")
    })
})

// PUT an article
app.put('/articles/:id', (req, res) => {
    Article.update({
     title: req.body.title,
     body: req.body.body,
     approved: req.body.approved
    }, {
     where: { id: req.params.id }
    })
     .then(article => {
     res.status(201).json(article)
     }) .catch(err => {
     res.status(422).json("Can't create article")
     })
})

//create server start 
app.listen(port, '0.0.0.0' ,() => {
    console.log(`http://localhost:${port}`)
})

const express = require("express")

const app = express()
const fs = require("fs")
const port = 8081

// Catatan: Kita perlu tambahkan line ini sebelum use router
// Kita pakai untuk handle request dari form
app.use(
    express.urlencoded({
     extended: false
    })
    )
    // Kita pakai untuk memasang view engine EJS
    app.set('view engine', 'ejs')

    // POST /articles, buat artikel baru
app.post('/articles', (req, res) => {
    Article.create({
     title: req.body.title,
     body: req.body.body
    })
     .then(article => {
     res.send('Article berhasil dibuat')
     })
    })
// GET /articles/create, menampilkan form create
app.get('/articles/create', (req, res) => {
    res.render('articles/create')
    })
    
//create server start 
app.listen(port, () => {
    console.log(`server run on = http://localhost:${port}`);
});
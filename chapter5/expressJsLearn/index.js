const { response } = require('express')
const e = require('express')
const express = require('express')
const fs =require('fs')
const { userInfo } = require('os')

const app = express()
const port = 8081

app.set('view engine', 'ejs')

// built in middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const router = require('./router')

app.get("/iniErorr", (req,res) => {
    inierorr
})

app.use(router)

const logger = (req,res,next) => {
    console.log(`${req.method} --- ${req.url}`);
    next();
};

app.use(logger);

app.get('/login', (req, res) => { //pengertian res adalah value pembalik hasil 
    console.log(req.query)
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('token', '4aa70de2-5674-4e08-a867-c0fa1b1f3f18')
    res.send(
        {
            name: "Asep",
            age: 23
        }
    )
})

app.get('/product', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.json([
        "Iphone",
        "Samsung",
        "Blackberry"
    ])
})

app.post('/order', (req,res) => { // http://localhost:8081/order?name=ahmad (cara pemanggilan )
    res.setHeader('Content-Type', 'application/json')
    if(req.query.name === "ahmad"){
        res.json({
            product: "Iphone",
            quantity: 3
        })
    }
})

app.get('/', (req,res) => { // masih gagal !
    res.render('index');
})

app.get('/greet', (req,res) => {
    const name = req.query.name || 'Void'
    res.render('greet', {
        name
    })
})

app.get('/register', (req,res) => { 
    res.render('register')
})

app.post('/register', (req,res) => { 
    const {email, password} = req.body
    
    users.push({email, password})
    
    res.redirect('/')
})

//erorr handling internal server erorr handler
app.use(function(err,req,res,next){ 
    console.error(err)
    res.status(500).json({
        status:'fail',
        erorr:err.message
    }) 
})

// 404 handler
app.use(function(req,res){
    res.status(404);
    res.json({
        status: 'fail',
        erorrs: 'Are you lost?'
    })
})

//create server start 
app.listen(port, () => {
    console.log(`example app in port ${port}`)
})
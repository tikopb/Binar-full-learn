const { response } = require('express')
const e = require('express')
const express = require('express')
const fs =require('fs')

const app = express()
const port = 8081


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
    res.setHeader("Content-Type", "text/html")
    fs.readFile("./index.html", (error, data) =>{
        if(!error){
            res.send(data);
        }else{
            res.send("No Data")
        }
    })
})

app.use(function (req, res, next) {
    res.status(404)
    res.send("404")
    next()
})

//create server start 
app.listen(port, () => {
    console.log(`example app in port ${port}`)
})
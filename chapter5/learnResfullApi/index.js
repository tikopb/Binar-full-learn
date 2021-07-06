const express = require("express")
const fs = require("fs")
const app = express()
const port = 8080

app.use(express.json())
//ambil data user
const users = require("./data/user.json")

app.get('/api/v1/users', (req,res)  => {
    res.status(200).json(users)
})

app.post('/api/v1/users/posts', (req,res)  => {
    const userNew = {username: req.body.username, password: req.body.password, fullname: req.body.fullname}
    const id = users[users.length - 1].id + 1
    const user = {
        id, username, password, fullname
    }
    users.push(user)
    res.status(201).json(user)
})

//find data 
app.get('api/v1/users/:id', (req,res) => { // mencari data json base on id 
    const user = users.find(i => i.id == req.params.id)
    if(user){
        res.status(200).json(user)
    }else{
        res.status(200).send("NO DATA")
    }
})

//put data
app.put('api/v1/users/:id', (req,res) => {
    var user = users.find(i=> i.id == req.params.id)
    const param = {username: req.body.username, password: req.body.password, fullname: req.body.fullname}

    user = {...users, ...params}

    users = user.map(i => i.id == user.id ? user : i )
    res.status(200).json(user)
})

//delete data
app.delete("api/v1/users/:id", (req,res) => {    
    let user = users.find(i => i.id == req.params.id)
    res.status(200).json({
        status: 200,
        message: `Record delete ${req.params.id}`
    })
})

app.post("/api/v1/foods", (req, res) => {
    var foods = require("./data/foods.json")
    var arrayFoods =[]
    let food = {
        name: req.body.name, 
        spicy: req.body.spicy
    }
    if(foods){ 
        console.log("food avaible")
    } else{ 
        console.log(food)
        arrayFoods.push(food)
        console.log("food not avaible")
        let data = JSON.stringify(arrayFoods)
        fs.writeFileSync("./data/foods.json", data)
        res.status(200).json(food)
    }
})

//create server start 
app.listen(port, '0.0.0.0' ,() => {
    console.log(`http://localhost:${port}`)
})
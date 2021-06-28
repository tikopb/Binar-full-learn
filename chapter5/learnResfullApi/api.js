const express = require("express")
let posts = require('./data/user.json')
const app = express() 
const fs = require("fs")

const port = 3000

app.use(express.json())

//get all data 
app.get('/api/v1/posts', (req,res) => {
    res.status(200).json(posts)
})

//app get with parameter
app.get('/api/v1/posts/:id', (req,res) => {
    const post = posts.find(i => i.id == req.params.id)
    res.status(200).json(post)
})


//app post (Create new data)
app.post('/api/v1/posts', (req,res) => {
    const {title ,body} = req.body
    //get id 
    const id = posts[posts.length -1].id + 1
    const post = { 
        id, title, body
    }
    posts.push(post)
    console.log(posts)
    
    posts = JSON.stringify(posts); // use for parsing const into json file 
    fs.writeFileSync("./data/user.json", posts, "utf8"); // use for saving the json file.
    
    res.status(201).json(post)
})

//app put 
app.put('api/v1/posts/:id', (req,res) => {
    let post = posts.find(i => i.id == req.params.id)
    
    const params = {title: req.body.title, body:req.body.body}
    post = { ...post, ...params}
    
    post = post.map(i => i.id == post.id ? post : i )
    res.status.json(post)
})

app.listen(port, () => {
    console.log (`http://localhost:${port}`)
})
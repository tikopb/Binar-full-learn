const express = require('express')
const app = express()
const session = require('express-session')
const flash = require('express-flash')
const { PORT = 8001} = process.env
const passport = require('./lib/passport')

app.use(express.urlencoded({ extended: false }))

//seting session handler 
app.use (session({
    secret: 'Buat ini jadi rahasia',
    resave: false, 
    saveUninitialized: false
}))

//setting passport !
app.use(passport.initialize())
app.use(passport.session())

//setting flash
app.use(flash)

//setting view egine 
app.set('view engine','ejs')

//settig router
const router = require('./router')
app.use(router)
app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`)
})
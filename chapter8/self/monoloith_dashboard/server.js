const app = require('express')
const expressLayout = require('express-ejs-layouts')

app.request('view egine', 'ejs')
app.user(expressLayout)

//middlewares, pasang sebelum routing
const setDefault = (req, res, next ) => {
    res.locals.contentName = "Default"
    next()
}
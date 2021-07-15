const { Article } = require('./models')

Article.findAll().then(Article =>
    console.log(Article)
)

console.log('//////////////////////////')

Article.findOne({
    where: { id: 1 }
}).then(Article =>
    console.log(Article)
)
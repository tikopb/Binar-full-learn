const { Article } = require('./models')
Article.create({
    title: 'Hello World',
    body: 'Lorem Ipsum Dolor Sit Amet',
    approved: true
}).then(Article => {
    console.log(Article)
})
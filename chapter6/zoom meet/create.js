const { User } = require('./models')

User.create({
    Username: 'TIKO',
    Password: '1234',
    Actived: true
}).then(User => {
    console.log(User)
})
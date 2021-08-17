const router = require('express').Router()

const auth = require ('./authController')

router.get('/login', (req,res) => res.render('login'))

// Homepage
router.get('/', (req, res) => res.render('index'))
// Register Page
router.get('/register' , (req, res) => res.render('register' ))
router.post('/register' , auth.register )

router.post('/login', auth.login)

module.exports = router
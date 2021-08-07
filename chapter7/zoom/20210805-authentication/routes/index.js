var express = require('express');
var router = express.Router();
const navigationRouter = require("./router");

router.use(navigationRouter);
router.get('/register',(req, res) => {
    res.render('register')
});

module.exports = router;

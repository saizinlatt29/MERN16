const express =require('express')
const router = express.Router({caseSensitive:true})

router.get('/Hello',(req,res) => {
    res.send(`<h1>Hello From AdminQQ</h1>`)
})

router.get('/router',(req,res) => {
    res.send('<h3> Express Router helps removing the burdenof route table from main application!!! </h3>')
})

module.exports = router;
const express = require('express')
const router = express.Router()


// All Designers Route
router.get('/', (req, res) => {
    res.render('designers/index')
})

// New Designer Route
router.get('/', (req, res) => {
    res.render('designers/new')
})

//Create Designer Route
router.post('/', (req, res) => {
    res.send('Create')
})
module.exports = router
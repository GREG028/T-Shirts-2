const express = require('express')
const router = express.Router()
const Designer = require('../models/designer')

// All Designers Route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
      const designers = await Designer.find(searchOptions)
      res.render('designers/index', { 
        designers: designers, 
        searchOptions: req.query 
    })
    } catch {
      res.redirect('/')
    }
    
})

// New Designer Route
router.get('/new', (req, res) => {
    res.render('designers/new', { designer: new Designer()})
})

//Create Designer Route
router.post('/', async (req, res) => {
    const designer = new Designer({
      name: req.body.name
    })
    try {
        const newDesigner = await designer.save()
        // res.redirect(`designers/${newDesigner.id}`)
        res.redirect(`designers`)
    }
    catch {
        res.render('designers/new', {
            designer: designer,
            errorMessage: 'Error creating Designer'
        })
    }
})

module.exports = router
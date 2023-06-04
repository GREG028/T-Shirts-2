const express = require('express')
const router = express.Router()
const Design = require('../models/design')
const Designer = require('../models/designer')


// All Designs Route
router.get('/', async (req, res) => {
  res.send('All Designs')
})

// New Design Route
router.get('/new', async (req, res) => {
  try {
    const designers = await Designer.find({})
    const design = new Design()
    res.render('designs/new', {
      designers: designers,
      design: design
    })
  } catch {
    res.redirect('/designs')
  }
})

//Create Design Route
router.post('/', async (req, res) => {
  const design = new Design({
    title: req.body.title,
    designer: req.body.designer,
    publishDate: new Date(req.body.publishDate),
    fileSize: req.body.fileSize,
    description: req.body.description
  })
})

module.exports = router
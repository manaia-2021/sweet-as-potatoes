const express = require('express')

const db = require('../db/sales')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllSales()
    .then(sales => {
      res.json({ sales })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong with processing the server request' })
    })
})

router.get('/:id', (req, res) => {
  db.getSaleById(Number(req.params.id))
    .then(sale => {
      res.json({ sale })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong with processing the server request' })
    })
})

module.exports = router

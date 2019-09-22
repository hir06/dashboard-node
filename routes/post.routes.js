const express = require('express')
const router = express.Router()
const data = require('../models/dashboard.model')
// Routes
module.exports = router
/* All data */
router.get('/', async (req, res) => {
    await data.getData()
    .then(data => res.json(data))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})
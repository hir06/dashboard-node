// Import packages
const express = require('express')
const morgan = require('morgan')
// App
var cors = require('cors');
const app = express();
app.use(cors());
  
// Morgan
app.use(morgan('tiny'))
// First route
app.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
})
// Starting server
app.listen(process.env.PORT)
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))
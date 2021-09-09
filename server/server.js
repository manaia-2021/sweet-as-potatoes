const express = require('express')
const path = require('path')

const salesRoutes = require('./routes/sales')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/sales', salesRoutes)

module.exports = server

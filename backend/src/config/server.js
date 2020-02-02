const express = require('express')
const app = express()
const cors = require('cors')
const queryInt = require('express-query-int')
const allowCors = require('./cors')
require('dotenv').config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(allowCors)
app.use(queryInt())

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`backend is running in port ${PORT}`)
})

module.exports = app
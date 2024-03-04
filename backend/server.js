const express = require('express')
const app = express()
const cors = require('cors')

const { MONGO } = require('./service/_index')

require('dotenv').config()

app.use(cors())

app.listen(8080)
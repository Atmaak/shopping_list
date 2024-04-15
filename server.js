const express = require('express')
const app = express()
const cors = require('cors')

const { item } = require('./route/_index')

require('dotenv').config()

app.use(express.json())
app.use(cors())

app.listen(8080)

app.use("/shoppingItem", item)
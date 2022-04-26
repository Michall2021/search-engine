const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const mongoose = require("mongoose")

require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(routes)

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology:true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))

app.listen(process.env.PORT, () => {
    console.log("API is running")
})
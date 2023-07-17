require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

const port = process.env.API_PORT || 3001

app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API.'})
})

app.listen(port, () => console.log(`listening on http://localhost:${port}`))

require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

const port = process.env.API_PORT || 3001

app.use(cors())

/**
 * Mock products to be replaced with DB.
 */
const mockProducts = [
  {
    id: 'a1b2c3d4',
    categoryID: 'A',
    title: 'Skateboard A',
    description: 'Mockup generic skateboard A.',
    price: 4999
  },
  {
    id: 'a2b3c4d5',
    categoryID: 'B',
    title: 'Skateboard B',
    description: 'Mockup generic skateboard B.',
    price: 5999
  }
]

/**
 * Get all products.
 */
app.get('/products', (req, res) => {
  res.json(mockProducts)
})

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API.'})
})

app.listen(port, () => console.log(`listening on http://localhost:${port}`))

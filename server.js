const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Contacts API' })
})

const PORT = process.env.PORT

app.listen(PORT, (error) => {
  if (error) {
    console.log(error.message);
    return
  }
  console.log(`Server is listening on port ${PORT}`);
})
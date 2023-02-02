const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

let contacts = [
  {
    id: '1',
    name: 'Wassim',
    phone: '+216 58484811',
    email: 'wassim@gmail.com'
  }, {
    id: '2',
    name: 'Omar',
    phone: '+216 23510920',
    email: 'omar@gmail.com'
  }, {
    id: '3',
    name: 'Chokri',
    phone: '+216 53514267',
    email: 'chokri@gmail.com'
  }, {
    id: '4',
    name: 'Rahma',
    phone: '+216 50657576',
    email: 'rahma@gmail.com'
  }
]

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Contacts API' })
})

app.get('/contacts', (req, res) => {
  res.json(contacts)
})

const PORT = process.env.PORT

app.listen(PORT, (error) => {
  if (error) {
    console.log(error.message);
    return
  }
  console.log(`Server is listening on port ${PORT}`);
})
const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

dotenv.config()
const app = express()

app.use(bodyParser.json())

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

app.get('/contacts/:id', (req, res) => {
  console.log(req.params);
  const contactId = req.params.id
  const contact = contacts.find(c => c.id === contactId)
  if (!contact) {
    res.status(404).json({ error: 'Contact not found' })
    return
  }
  res.json(contact)
})

app.post('/contacts', (req, res) => {
  console.log("CHECK:", req.body)
  const contactData = {
    id: Math.round(Math.random()*10000).toString(),
    ...req.body
  }
  contacts.push(contactData)
  res.status(201).json({message: 'Contact created successfully'})
})

app.delete('/contacts/:id', (req, res) => {
  const contactToDeleteId = req.params.id
  contacts = contacts.filter(c => c.id !== contactToDeleteId)
  res.json({ message: 'Contact deleted successfully' })
})

const PORT = process.env.PORT

app.listen(PORT, (error) => {
  if (error) {
    console.log(error.message);
    return
  }
  console.log(`Server is listening on port ${PORT}`);
})
const express = require('express');
const app = express()
const contactService = require('./service/contactService');
const logger = require('./utility/middlewareHandler');

const path = require('path')

app.use(express.json())
app.use(logger)

app.use(express.static('public'))

app.use('/contact', require('./routes/contactRoutes'))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.listen(3000, () =>{
    console.log('Server is running on port 3000')
})
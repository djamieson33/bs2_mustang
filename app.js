const express = require('express')
// const dotEnv = require('dotenv').config()
const exphbs = require('express-handlebars')
// const bodyParser = require('body-parser')
const path = require('path')

// Database
const db = require('./config/database')

// Test DB
db.authenticate()
.then(() => console.log('Database Connected ... '))
.catch(err => console.log('Error: ' + err))


const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Set a static Folder
// app.use(express.static(path.join(__dirname, 'public')));

// Gig routes
app.use('/gigs', require('./routes/gigs'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


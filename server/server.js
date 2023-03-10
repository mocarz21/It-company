const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

app.use(morgan('tiny'));
app.use(session({secret: 'xyz567', store: MongoStore.create({mongoUrl: 'mongodb://localhost:27017/CompanyDB'}), cookie: {secure: process.env.NODE_ENV === 'production',}, resave: false, saveUninitialized: false}));
app.use(cors({origin: '*'}, {credentials: true})); //nie zapominaj ustawić domeny z dostępem np: {origin: 'http://example.com'}

app.use('/admin',(req, res, next)=>{
  res.send('no no no')
  console.log('go away')
})

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

const homeRoutes = require('./routes/home.routes');
const infoRoutes = require('./routes/info.routes');
const formularzRoutes = require('./routes/formularz.routes');
const adminRoutes = require('./routes/admin.routes');
const authRoutes = require('./routes/auth.routes')

 // pamiętaj o dokładnym ustawieniu
 app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')));
app.use('/api',homeRoutes);
app.use('/api',infoRoutes);
app.use('/api',formularzRoutes);
app.use('/api',adminRoutes)
app.use('/auth', authRoutes)

app.all('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.use((req, res) => {
  res.status(404).send('404 not found...');
});

// connects our backend code with the database
mongoose.connect('mongodb://localhost:27017/CompanyDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

app.listen('8000', () => {
  console.log('Server is running on port: 8000');
});
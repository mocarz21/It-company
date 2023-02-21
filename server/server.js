const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const homeRoutes = require('./routes/home.routes');
const infoRoutes = require('./routes/info.routes');
const formularzRoutes = require('./routes/formularz.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();

app.use(express.static(path.join(__dirname,'../'))) // pamietac o dkoładnym ustawieniu
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api',homeRoutes);
app.use('/api',infoRoutes);
app.use('/api',formularzRoutes);
app.use('/api',adminRoutes)



app.use((req, res) => {
  res.status(404).send('404 not found...');
});

app.use('/admin,',(req, res, next)=>{
  res.send('no no no')
  console.log('go away')
})

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


// app.use((req,res,next)=>{
//   res.show = (name)=>{
//     res.sendFile(path.join(__dirname, `${name}`));
//   }
//   next();
// })

// connects our backend code with the database
mongoose.connect('mongodb://localhost:27017/CompanyDB', { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

app.listen('8000', () => {
  console.log('Server is running on port: 8000');
});

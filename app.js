const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
//import routes
const bookRoute=require('./routes/books');
app.use('/books',bookRoute);

//Routes//listening
mongoose.connect("mongodb://localhost:27017/abcdD",() =>{
  console.log ("Database connected");
});

app.listen(3000);
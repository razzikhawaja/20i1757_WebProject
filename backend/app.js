const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

const userRoutes = require('./routes/userRoutes');
const tourRoutes = require('./routes/tourRoutes');
const cookieParser = require('cookie-parser'); 

const app = express() // setup express app
app.use(express.json())
app.use(cookieParser()) 
app.use(cors())
app.use(express.urlencoded( { extended: true } )) 

app.listen(3000, ()=>{

    console.log("server runs perfectly!!"); 
});

const dbURI = 'mongodb+srv://razzi:0984@cluster0.vuen418.mongodb.net/Project'
mongoose.connect(dbURI)
.then((result)=>{
    console.log('DB successfully connected.');
}).catch((err)=>{
    console.log(err);
})

app.use('/', userRoutes);
app.use('/', tourRoutes);









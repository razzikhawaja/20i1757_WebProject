const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

const userRoutes = require('./routes/userRoutes');
const tourRoutes = require('./routes/tourRoutes');
const cookieParser = require('cookie-parser'); 

const app = express() // setup express app
app.use(express.json())
app.use(cookieParser()) 
app.use(cors(
    {
        origin: [""],
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials:true
    }
))
app.use(express.urlencoded( { extended: true } )) 

const dbURI = 'mongodb+srv://razzi:0984@cluster0.vuen418.mongodb.net/Project'
mongoose.connect(dbURI)
.then((result)=>{
    app.listen(3000);
    console.log('successfully connected.');
}).catch((err)=>{
    console.log(err);
})

app.use('/', userRoutes);
app.use('/', tourRoutes);









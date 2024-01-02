const mongoose = require('mongoose');
const { isEmail } = require('validator');  

const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    name: {
        type: String, 
        required: [true, 'Please enter a name']
    }, 
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true, 
        validate: [ isEmail, 'Please enter a valid email']
    }, 
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        // minlength: [6, 'Minimum password length is 6 character']
    },
    address: {
        type: String, 
        required: true
    },
    type: {
        type: String,
        enum: ['admin', 'tour_agent', 'customer'],
        required: true
    }
}, {timestamps: true}); 


const User = mongoose.model('User', userSchema);  
module.exports = User;

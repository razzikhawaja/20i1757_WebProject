const mongoose = require('mongoose');
const { isEmail } = require('validator');  

const Schema = mongoose.Schema;

const blockuserSchema = new Schema({ 
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
    }, 
    block: {
        type: Boolean, 
        default: false
    }
}, {timestamps: true}); 


const BlockedUser = mongoose.model('BlockedUser', blockuserSchema);  
module.exports = BlockedUser;

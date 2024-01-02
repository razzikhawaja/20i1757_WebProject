const jwt = require('jsonwebtoken'); 
require('dotenv').config();

const requireAuth = (req, res, next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token==null){ 
        res.sendStatus(401);
        console.log('invalid token');  
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err){
            console.log(err)
            return res.sendStatus('403'); 
        }
        console.log('User type:', user.type); // Log user type
        if(user.type==='admin')
            return next(); 
        else console.log('user is not admin');     
        
    })
        
};  

module.exports = { requireAuth }; 



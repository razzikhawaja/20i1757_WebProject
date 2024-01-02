const User = require('../models/users');
const BlockedUser = require('../models/blockusers'); 
const jwt = require('jsonwebtoken'); 
require('dotenv').config();  




const create_user = (req, res)=>{
    console.log(req.body);  
    const { name, email, password, address, type } = req.body;
    
    const user = new User({
        name, email, password, address, type
    })
    user.save()
        .then((result)=>{
            res.send(result); 
            console.log(result); 
        })
            .catch((err) =>{
                console.log(err); 
        })
}


const update_user = (req, res) => {
    const { name, email, password, address, type } = req.body;
    const userEmail = req.params.email; 
    
    User.findOneAndUpdate(
        { email: userEmail },
        { name, email, password, address, type },
        { new: true }
    )
        .then((result) => {
            res.send(result);
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        })
}

const login_user = async (req, res) =>{
    const { email, password } =  req.body; 
    
    const user = await User.findOne( {email} );    
    // Check if user exists and password is correct
    if (!user || user.password!==password) {
        res.send('Invalid credentials'); 
    }
    else{
        const User = { email: user.email, type: user.type};
        const type = user.type;
        const accessToken = jwt.sign(User, process.env.ACCESS_TOKEN_SECRET);
        res.json({accessToken: accessToken, type, message: 'Successfully login!'});   
        console.log(accessToken);   
    }
}
// Route for deleting a user
const delete_tour_agent = async (req, res) => {

      const email = req.params.email;
        const user = await User.findOne({email}); 
        console.log(user); 
            if(user && user.type==='tour_agent'){
                try {
                    // Find user in database by ID and delete it
                    const deletedUser = await User.findOneAndDelete({email});
                    // Check if user was deleted
                    if (!deletedUser) {
                      res.send('User not found'); 
                    }
              
                    res.status(200).json(deletedUser);
                  } catch (err) {
                    res.status(400).send(err.message);
                  }
            }
            else {
                res.send('User not found or not a tour agent');
        }
};
// Route for viewing all tour agents
const view_tour_agent = async (req, res)=>{
    try {
      // Find all blocked users in the BlockedUser collection
      const tourAgents = await User.find({type: 'tour_agent'});
  
      // Return the array of tour agents
      res.status(200).json(tourAgents);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while retrieving the tour agents' });
    }
};

// Route for blocking a user
const block_tour_agent = async (req, res) => {
    try {
      const { email } = req.body;
  
      // Find user in the User collection
      const user = await User.findOne({email}); 
      console.log(user); 
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      // Create a blocked user in the BlockedUser collection using the user's information
      const blockedUser = new BlockedUser({
        name: user.name,
        email: user.email,
        password: user.password,
        address: user.address, 
        type: user.type, 
        block: true
      });

      // Save the blocked user to the BlockedUser collection
      await blockedUser.save(); 
      
      res.status(200).json({ message: 'User blocked successfully' });    
      // Call the delete_tour_agent route handler to delete the user from the User collection
      //await delete_tour_agent(req, res);
      if(user && user.type==='tour_agent'){
        // Find user in database by Email and delete it
        await User.findOneAndDelete({email});
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while blocking the user' });
    }
};

// Route for deleting a customer
const delete_customer = async (req, res) => {

    const email = req.params.email;
      const user = await User.findOne({email}); 
      console.log(user); 
          if(user && user.type==='customer'){
              try {
                  // Find user in database by ID and delete it
                  const deletedUser = await User.findOneAndDelete({email});
                  // Check if user was deleted
                  if (!deletedUser) {
                    // throw new Error('User not found');
                    res.send('User not found'); 
                  }
            
                  res.status(200).json(deletedUser);
                } catch (err) {
                  res.status(400).send(err.message);
                }
          }
          else {
              res.send('User not found or not a customer');
      }
};
// Route for viewing all customers
const view_customer = async (req, res)=>{
  try {
    // Find all blocked users in the BlockedUser collection
    const customer = await User.find({type: 'customer'});

    // Return the array of customers
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the customers' });
  }
};
// Routes for blocking a customer
const block_customer = async (req, res) => {
    try {
      const { email } = req.body;
  
      // Find user in the User collection
      const user = await User.findOne({email}); 
      console.log(user); 
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      // Create a blocked user in the BlockedUser collection using the user's information
      const blockedUser = new BlockedUser({
        name: user.name,
        email: user.email,
        password: user.password,
        address: user.address, 
        type: user.type, 
        block: true
      });

      // Save the blocked user to the BlockedUser collection
      await blockedUser.save(); 
      
      res.status(200).json({ message: 'User blocked successfully' });    
      if(user && user.type==='customer'){
        // Find user in database by Email and delete it
        await User.findOneAndDelete({email});
      }
    } catch (error) {
      console.log(error); 
      res.status(500).json({ error: 'An error occurred while blocking the user' });
    }
};

module.exports = {
    create_user, 
    update_user, 
    login_user, 
    delete_tour_agent, 
    block_tour_agent, 
    view_tour_agent, 
    delete_customer, 
    block_customer, 
    view_customer, 
}
const express = require('express'); 
const userController = require('../controllers/userController');
const router = express.Router() 
const { requireAuth} = require('../middleware/authMiddleware');

router.post('/create', userController.create_user); 
router.put('/update/:email', userController.update_user); 
router.post('/login', userController.login_user);
router.get('/view_tour_agent', requireAuth, userController.view_tour_agent); //use middleware here


router.post('/create_tour_agent', userController.create_user); 
router.put('/update_tour_agent/:email', userController.update_user); 
router.post('/login_tour_agent', userController.login_user);  
router.delete('/delete_tour_agent/:email', userController.delete_tour_agent); 
router.post('/users/block_tour_agent', userController.block_tour_agent); 
router.delete('/delete_customer/:email', userController.delete_customer); 
router.post('/block_customer', userController.block_customer)
router.get('/view_customer', userController.view_customer);

module.exports = router; 




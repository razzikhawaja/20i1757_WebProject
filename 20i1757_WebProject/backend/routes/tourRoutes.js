const express = require('express'); 
const tourController = require('../controllers/tourController');
const router = express.Router() 

router.get('/view_tour', tourController.view_tour); 
module.exports = router; 
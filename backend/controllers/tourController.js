const Tour = require('../models/tours');

// Route for viewing all tours
const view_tour = async (req, res)=>{
    try {

      const tours = await Tour.find();
  
      // Return the array of tour agents
      res.status(200).json(tours);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while retrieving the tours' });
    }
};

module.exports = {
    view_tour
}
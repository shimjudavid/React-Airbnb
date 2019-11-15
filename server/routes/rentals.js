const express = require("express");
const router = express.Router();
//const { check, validationResult } = require('express-validator');
const Rental = require('../models/Rental');

// @route     GET api/rentals
// @desc      Get all user's rentals
// @access    Private
router.get('/', async(req, res) => {
  try {
    const rentals = await Rental.find({}).sort({ date: -1 });
    res.json(rentals);
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send({ errors: [{detail:'Server Error'}]});
  }
});

router.get('/:id', async (req, res) => {
  const rentalId = req.params.id;
  try {
    const rental = await Rental.findById(rentalId);
    res.json(rental);
  }
  catch (error) {
    res.status(400).json({ error: 'Rental Not Found'});
  }
});



module.exports = router;
const express = require('express');
const router = express.Router();
const Property = require('../models/Property'); // Import your Property model

// Create a new property
router.post('/newpic', async (req, res) => {
  try {
    const { Pname, Pcity, Pstate, Pnumber } = req.body;
    const property = new Property({ Pname, Pcity, Pstate, Pnumber });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create property' });
  }
});

// Get all properties
router.get('/pic', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not retrieve properties' });
  }
});

// Delete a property by ID
router.delete('/delpic/:id', async (req, res) => {
  try {
    const property = await Property.findByIdAndRemove(req.params.id);
    if (property) {
      res.json(property);
    } else {
      res.status(404).json({ error: 'Property not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete property' });
  }
});

module.exports = router;

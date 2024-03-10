const express = require('express');
const router = express.Router();
const UserModel = require('../models/Users');

// Create a new user
router.post('/newreg', async (req, res) => {
  const { Firstname, Lastname, Role, Username, Password } = req.body;

  try {
    const user = new UserModel({ Firstname, Lastname, Username, Password, Role });
    await user.save();
    res.send('Inserted Values');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not create user' });
  }
});

// Get all users
router.get('/display', async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not retrieve users' });
  }
});

module.exports = router;

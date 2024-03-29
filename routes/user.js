const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  res.send("runn")
})
router.post('/send', async (req, res) => {
  console.log(req.body)
  try {
    const { name, email, message } = req.body;
    const newUser = new User({ name, email, message });
    await newUser.save();
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/collection', userController.getAllUsers);

router.get('/user/:id', () => {
  res.send('get a particular user by id');
});

router.get('/user/search', (req, res) => {
  res.send(`query send is${req.query}`);
});

module.exports = router;

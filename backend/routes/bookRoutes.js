const express = require('express');

const router = express.Router();

const bookController = require('../controllers/bookController');

router.get('/collections', bookController.getAllBooks);

router.get('/book/:id', () => {
  res.send('get a particular book by id');
});

router.get('/book/search', (req, res) => {
  res.send(`query send is${req.query}`);
});

module.exports = router;

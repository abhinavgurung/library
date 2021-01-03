const express = require('express');

const router = express.Router();

const bookController = require('../controllers/bookController');

//get all the books
router.get('/collection', (req, res) => {
  bookController.getAllBooks(req, res);
});

router.get('/:id', (req, res) => {
  res.send('get a particular book by id');
});

router.get('/search', (req, res) => {
  res.send(`query send is${req.query}`);
});

//Add a new book
router.post('/', (req, res) => {
  bookController.addBook(req, res);
});

module.exports = router;

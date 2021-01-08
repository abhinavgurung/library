const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');

//get all the books
router.get('/collection', bookController.getAllBooks);

//get a book by id
router.get('/:isbn', bookController.getBookByIsbn);

router.get('/search', (req, res) => {
  res.send(`query send is${req.query}`);
});

//Add a new book
router.post('/', bookController.addBook);

module.exports = router;

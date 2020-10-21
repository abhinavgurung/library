const BookService = require('../services/bookServices');

// Get all the books
exports.getAllBooks = async (req, res) => {
  //call service
  res.send('inside get all books');
};

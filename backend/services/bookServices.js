const Book = require('../models/Book');

//get all te books in the collection
const getAllBooks = async () => {
  const books = await Book.find();
  //returns an array of books
  return books;
};

const addBook = async (book) => {
  try {
    const result = await book.save();
    return { success: true, body: result };
  } catch (error) {
    console.log(error.message);
    return { success: false, error: error };
  }
};

module.exports = {
  getAllBooks,
  addBook,
};

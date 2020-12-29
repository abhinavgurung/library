const Author = require('../models/Author');
const Book = require('../models/Book');
const AuthorService = require('../services/AuthorService');
const BookService = require('../services/bookServices');

// Get all the books
const getAllBooks = async (req, res) => {
  //call service
  const result = await BookService.getAllBooks();
  res.status(200).send(result);
};

// add a new book
const addBook = async (req, res) => {
  const {
    title,
    isbn,
    author,
    published,
    description,
    isAvailable,
  } = req.body;

  try {
    //if title is empty
    if (title === '') {
      res.status(404).json({ msg: 'No Title for the Book' });
      return res;
    }

    //if there is no isbn
    if (!isbn) {
      res.status(404).json({ msg: 'No isbn for the Book' });
      return res;
    }

    //check if the book with same isbn is present
    const existingBooks = await Book.find({ isbn });
    if (!existingBooks || existingBooks === undefined) {
      res
        .status(400)
        .json({ msg: 'Book with that isbn already exists' });
    }

    const newAuthor = new Author({
      firstName: author.firstName,
      lastName: author.lastName,
    });

    let authorId = '';

    // await newAutor.save();
    const docs = await Author.find({ firstName: author.firstName });

    if (docs === undefined || docs.length === 0) {
      // const auth = await newAuthor.save(); //send this to service
      const reply = await AuthorService.addAuthor(newAuthor);
      authorId = reply.body._id;
    }

    //if exists then add this author in the new book
    const newBook = new Book({
      title,
      isbn,
      published,
      description,
      isAvailable,
    });

    //Add this author id in to the authors array of this book
    newBook.authors.push(authorId);

    const result = await BookService.addBook(newBook);
    if (!result.success) {
      res.status(500).send(result.body);
    }

    res.status(200).send(result.body);

    //while finding do populate to get all authors instead of their id
    // Book.findOne({ title })
    //   .populate('authors')
    //   .exec((err, book) => {
    //     if (err) {
    //       res.status(500).json({ msg: err.message });
    //     }
    //     res.send(book);
    //   });

    // res.status(200).json({ newBook });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllBooks,
  addBook,
};

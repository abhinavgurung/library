const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: [String],
  published: Date,
  added: { type: Date, default: Date.now },
  description: String,
  isAvailable: { type: Boolean, default: true },
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;

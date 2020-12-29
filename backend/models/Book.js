const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    isbn: { type: Number, unique: true, required: true },
    authors: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Author',
      },
    ],
    published: Date,
    description: String,
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    books: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Book',
      },
    ],
  },
  { timestamps: true }, // gives createdAt and updatedAt
);

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;

const { success, error } = require('consola');
const { DB, PORT } = require('./config');
const mongoose = require('mongoose');

//function to connect DB
const connectDB = async () => {
  try {
    // Connection With DB
    await mongoose.connect(DB, {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    success({
      message: `Successfully connected with the Database \n`,
      badge: true,
    });
  } catch (err) {
    error({
      message: `Unable to connect with Database \n${err}`,
      badge: true,
    });
  }
  // connectDB();
};

module.exports = connectDB;

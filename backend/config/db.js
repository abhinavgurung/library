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
      message: `Successfully connected with the Database \n${DB}`,
      badge: true,
    });

    // // Start Listenting for the server on PORT
    // app.listen(PORT, () =>
    //   success({
    //     message: `Server started on PORT ${PORT}`,
    //     badge: true,
    //   }),
    // );
  } catch (err) {
    error({
      message: `Unable to connect with Database \n${err}`,
      badge: true,
    });
  }
  connectDB();
};

module.exports = connectDB;

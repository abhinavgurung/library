const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { success, error } = require('consola');
const { connect } = require('mongoose');

const { DB, PORT } = require('./config/config.js');
const connectDB = require('./config/db');

connectDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//function to connect DB
// const startApp = async () => {
//   try {
//     // Connection With DB
//     await connect(DB, {
//       useFindAndModify: true,
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });

//     success({
//       message: `Successfully connected with the Database \n${DB}`,
//       badge: true,
//     });
//   } catch (err) {
//     error({
//       message: `Unable to connect with Database \n${err}`,
//       badge: true,
//     });
//   }
// };

//user routes
app.use('/api/users', require('./routes/userRoutes'));

//books routes
app.use('/api/books', require('./routes/bookRoutes'));
//home page--testing purpose
app.get('/', (req, res) => {
  res.send('here it is');
});

// 404 Handler
app.use((req, res, next) => {
  next(createHttpError.NotFound());
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});

// startApp();

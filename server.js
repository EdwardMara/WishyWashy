const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const app = express();

app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/wishywashy";

// Connect to MongoDB
mongoose.connect(MONGODB_URI,)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

  require("./auth/models/Worker");
  require("./auth/models/Manager");

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./auth/passport/passport')(passport);

// Use Routes
const authWorkerRoutes = require('./auth/routes/authWorker');
const authManagerRoutes = require('./auth/routes/authManager');

app.use('/api/auth', authWorkerRoutes);
app.use('/api/auth', authManagerRoutes);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 3005;

app.listen(port, () => console.log(`Server running on port ${port}`));

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const WorkerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Worker = mongoose.model('Workers', WorkerSchema);

module.exports = Worker;

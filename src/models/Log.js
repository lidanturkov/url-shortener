const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  info: String,
  date: { type: String, default: Date.now }
});

module.exports = mongoose.model('Log', logSchema, 'Logs');
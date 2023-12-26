const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ['main', 'sub', 'child', 'subchild'],
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

const OptionModel = mongoose.model('Option', optionSchema);

module.exports = OptionModel;

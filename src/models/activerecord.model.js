const mongoose = require('mongoose');

const activeRecordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sectors: [
      {
        value: {
          type: String,
          required: true,
        },
      },
    ],
    checked: {
      type: Boolean,
      required: true,
    },
  },
);

const ActiveRecordModel = mongoose.model('ActiveRecord', activeRecordSchema);

module.exports = ActiveRecordModel;

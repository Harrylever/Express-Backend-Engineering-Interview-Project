const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mainOption: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'MainOption',
  },
  subOption: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'SubOption',
  },
  childOption: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'ChildOption',
  },
  subChildOption: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'SubChildOption',
  },
}, {
  timestamps: true,
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;

const mongoose = require('mongoose');
const schedulesInformationSchema = new mongoose.Schema({
  calendar_id: String,
  name: String, 
  description: String,
}, { _id: false });

const userSchema = new mongoose.Schema({
  user_id: String,
  email: String,
  name: String,
  nick_name: String,
  password: String,
  schedulesCreated: { type: [schedulesInformationSchema], required: true },
  schedulesJoined: { type: [schedulesInformationSchema], required: true },
  isConfirmed: Boolean
});

const User = mongoose.model('User', userSchema);

module.exports = User;
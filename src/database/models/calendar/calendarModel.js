const mongoose = require('mongoose');

const CalendarInformationSchema = new mongoose.Schema({
  id:{ type: String, required: true },  
  title:{ type: String, required: true }, //isso aqui é o nome da pessoa
  start:{ type: String, required: true },
  end:{ type: String, required: true },
  desc:{ type: String, required: true },
  color:{ type: String, required: true },
  type:{ type: String, required: true },
  user_id: { type: String, required: true },
}, { _id: false });

const CalendarSchema = new mongoose.Schema({
  calendar_id: String,
  name: String, 
  description: String,
  createdBy: { type: String, required: true },
  users: { type: [String], required: true },
  calendarInformation: { type: [CalendarInformationSchema] }
});

module.exports = mongoose.model('Calendar', CalendarSchema);
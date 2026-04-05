const mongoose = require("mongoose"); 

const appointmentSchema = new mongoose.Schema({
  professorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "casUser",
  },

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "casUser",
  },

  time: {
    type: Date,
    required: true,
    default: Date.now
  },

  status: {
    type: String,
    enum: ["booked", "cancelled", "Free"],
    default: "booked",
  },
}, 
{ timestamps: true });

const Appointment = mongoose.model("appointment", appointmentSchema); 
module.exports = Appointment; 


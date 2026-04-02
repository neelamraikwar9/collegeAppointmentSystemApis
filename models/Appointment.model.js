const mongoose = require("mongoose"); 

const appointmentSchema = new mongoose.Schema({
  professorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: casUser,
    required: true,
  },

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: casUser,
    required: true,
  },

  time: {
    type: Date,
    required: true,
  },

  status: {
    type: String,
    enum: ["booked", "cancelled", "completed"],
    default: "booked",
  },
}, 
{ timestamps: true });

const appointment = mongoose.model("appointment", appointmnetSchema)

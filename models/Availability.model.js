const mongoose = require("mongoose"); 

const avalabilitySchema = new mongoose.Schema({
  professorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "casUser",
    required: true,
  },

  start: {
    type: Date,
    required: true,
  },

  end: {
    type: Date,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
}, 
{
    timestamps: true
});

const Availability = mongoose.model("Availability", avalabilitySchema); 

module.exports = Availability; 
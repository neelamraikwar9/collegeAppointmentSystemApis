const mongoose = require("mongoose"); 
const { v4: uuidv4 } = require('uuid');

uuidv4(); // ⇨ '23c37ede-1c09-422a-8da8-42ad65cc33f9'

const casUsersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["Student", "Professor"],
      required: true,
    },

    studentId: {
      type: String,
      unique: true,
      default: () => uuidv4(),
      rquired: true,
    },

    professorId: {
      type: String,
      unique: true,
      default: () => uuidv4(),
      required: true, 
    },

    createAt: {
      type: Date,
      default: Date.now,
    },

    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

const casUser = mongoose.model("casUser", casUsersSchema); 
module.exports = casUser;



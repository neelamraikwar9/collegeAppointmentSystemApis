const mongoose = require("mongoose"); 

const appointmentSchema = new mongoose.Schema({
     professorId: {
        type: mongoose.Schema.Types.ObjectId, 
    }
})
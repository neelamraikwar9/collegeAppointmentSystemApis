const mongoose = require("mongoose"); 

const casUsersSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true, 
        }, 
        email: {
            type: String, 
            required: true,
            unique: true
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
        }, 

        professorId: {
            type: String, 
            unique: true, 
            
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
        timestamps: true
    }
)

const casUser = mongoose.model("casUser", albumSchema); 
module.exports = casUser;

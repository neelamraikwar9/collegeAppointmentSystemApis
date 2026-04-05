const express = require("express"); 
const router = express.Router(); 
const Appointment = require("../models/Appointment.model");
const Availability = require("../models/Availability.model"); 
const VerifyAuth = require("./authentication"); 
const  casUser  = require("../models/Users.model"); 

//api to post slots; 

router.post("/appointment/slots", VerifyAuth, async(req, res) => {
    const { professorId } = req.params;

    const professor = await casUser.findOne({ _id: professorId, role: "Professor" })
      .select("_id");

    if (!professor) {
      return res.status(404).send("Professor not found or not authorized");
    }
    
    try{
       const slot = new Appointment(req.body); 
       console.log(slot, "slot"); 

       await slot.save();  
       console.log(slot, "slot"); 

       res.status(201).json({message: "Slot added successfully.", newSlot: slot})

    } catch(error){
        console.log(error, "error"); 
        res.status(500).json({ error: "Failed to add Slot." }); 
    }

})

module.exports = router; 


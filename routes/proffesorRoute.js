const express = require("express"); 
const router = express.Router(); 
const Appointment = require("../models/Appointment.model");
const Availability = require("../models/Availability.model"); 
const VerifyAuth = require("./authentication"); 
const  casUser  = require("../models/Users.model"); 

//api to post slots; 

router.post("/appointment/slots", VerifyAuth, async(req, res) => {
    //  console.log("req.params:", req.params); 
     console.log("req.body:", req.body);  

    const { professorId } = req.body;
     console.log("professorId:", professorId);


    const professor = await casUser.findOne({ _id: professorId, role: "Professor" }); 

      console.log(professor, "professor"); 


    if (!professor) {
      return res.status(404).send({error: "Professor not found or not authorized"});
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

}); 


// api to get slots; 

router.get("/appointment/slots", VerifyAuth, async(req, res) => {
    try {
      const slots = await Appointment.find({ professorId: req.user._id });
      console.log(slots, "slot");

      res
        .status(200)
        .json(slots);
    } catch (error) {
      console.log(error, "error");
      res.status(500).json({ message: "Failed to fetch Slots", error: error });
    }

})



module.exports = router; 


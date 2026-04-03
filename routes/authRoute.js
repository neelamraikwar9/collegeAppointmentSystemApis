const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const verifyJWT = require("./authentication");
const casUser = require("../models/Users.model");

router.post("/auth/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    cosnole.log(req.body, "Recived"); 

    const existingUser = await casUser.findOne({ email });

    if (existingUser) {
      return res
        .status(401)
        .json({ message: "User already exist. Please Login.", success: false });
    }

    const hashed = await bcrypt.hash(password, 10);
    console.log(hashed, "hashed");
    const user = new casUser({ name, email, password: hashed, role });
    console.log(user, "user");
    await user.save();
    res.status(201).json({ message: "User created.", success: true });
  } catch (error) {
    console.log(error, "error");
    res.status(400).json({ message: "Internal server error", success: false });
  }
});

router.post("/auth/signin", async(req, res) => {
    const {email, password, role} = req.body; 
    
    const user = await casUser.findOne({ email });

    if(!user){  
        res.status(401).json({error: "invalid credentials", success: false}); 
    }

     const isMatch = await bcrypt.compare(password, user.password);
     if (!isMatch) {
       res.status(401).json({ error: "Invalid credentials", success: false });
     }

      const token = jwt.sign({ userId: user._id, email: user.email }, SECRET, {
        expiresIn: "24h",
      });
      res.status({ token });
});



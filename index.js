const express = require("express"); 
const jwt = require("jsonwebtoken");  
const bcrypt = require("bcrypt"); 
const cors = require("cors"); 
const dotenv = require("dotenv"); 
const { initializeDB } = require("./db/db.connect"); 
const app = express();
const authRoute = require("./routes/authRoute"); 

app.use(cors({origin: "*", credentials: true})); 
app.use(express.json()); 

dotenv.config(); 

initializeDB();


const PORT = 5000; 
app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`); 
}); 


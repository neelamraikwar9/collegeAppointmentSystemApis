const jwt = require("jsonwebtoken"); 

//authentication middleware; 
const verifyJWT = (req, res, next) => {
    const token = req.headers["authorization"]; 

    if(!token){
        return res.status(401).json({message: "No token provided."}); 
    }

    try{
        console.log(token); 
        const decodeToken = jwt.verify(token, SECRET); 
        req.user = decodeToken; 
        next(); 
    } catch(error){
        res.status(402).json({message: "Invalid token."});
    }
}; 

module.exports = verifyJWT;
const jwt = require("jsonwebtoken");
const httpStatusText = require("../utils/httpStatusText");
const appError = require("../utils/appError");


const verifyToken = (req, res, next) => {
  const authHeader = req.headers["Authorization"] || req.headers["authorization"];

  if(!authHeader){
    const error = appError.create(httpStatusText.ERROR, 401, "token is required");
    return next(error);
  }

  const token = authHeader.split(" ")[1];

  try{

    const currentUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.currentUser = currentUser;
    next();
  
  }catch(err){
    
    const error = appError.create(httpStatusText.ERROR, 401, "invalid token");
    return next(error);
  
  }
}

module.exports = verifyToken;
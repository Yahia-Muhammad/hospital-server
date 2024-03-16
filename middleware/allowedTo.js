const appError = require("../utils/appError");
const httpStatusText = require("../utils/httpStatusText");

module.exports = (...roles) => {
  return (req, res, next) => {
    if(roles.includes(req.currentUser.role)){
      next();
    }else{
      const error = appError.create(httpStatusText.FAIL, 401, "not allowed");
      return next(error);
    }
  }
}
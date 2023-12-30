const express = require("express");
const router = express.Router();
const appError = require("../utils/appError");
const httpStatusText = require("../utils/httpStatusText");

// start uploads

const multer  = require('multer')
const diskStorage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, "uploads");
  },
  filename: function(req, file, cb){
    const ext = file.mimetype.split("/")[1];
    const fileName = `user-${Date.now()}.${ext}`;
    cb(null, fileName);
  }
})
const fileFilter = (req, file, cb) => {
  const imageType = file.mimetype.split("/")[0];
  if(imageType === "image"){
    return cb(null, true)
  }else{
    return cb(appError.create(httpStatusText.ERROR, 400, "file must be an image"), false)
  }
}
const upload = multer({ storage: diskStorage, fileFilter: fileFilter });

// end uploads

const userController = require("../controllers/userController");
const { validationSchema } = require("../middleware/valiUserMiddle");
const verifyToken = require("../middleware/verifyToken");
const allowedTo = require("../middleware/allowedTo");
const userRoles = require("../utils/userRoles");

// get all users
router.get("/", verifyToken, allowedTo(userRoles.USER, userRoles.ADMIN, userRoles.MANGER), userController.getUsers);
// get single user
router.get("/:id", verifyToken, allowedTo(userRoles.USER, userRoles.ADMIN, userRoles.MANGER), userController.getUser);
// add user
router.post("/", verifyToken, allowedTo(userRoles.ADMIN, userRoles.MANGER), upload.single("avatar"), validationSchema(), userController.addUser);
// edit details for user
router.patch("/:id", verifyToken, allowedTo(userRoles.ADMIN, userRoles.MANGER), userController.editUser);
// delete user
router.delete("/:id", verifyToken, allowedTo(userRoles.ADMIN, userRoles.MANGER), userController.deleteUser);
// auth
router.post("/register", upload.single("avatar"), userController.register);

router.post("/login", userController.login);

module.exports = router;
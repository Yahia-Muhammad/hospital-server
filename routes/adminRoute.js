const express = require("express");
const router = express.Router();
const appError = require("../utils/appError");
const httpStatusText = require("../utils/httpStatusText");

// start uploads

const multer = require('multer')
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const fileName = `user-${Date.now()}.${ext}`;
    cb(null, fileName);
  }
})
const fileFilter = (req, file, cb) => {
  const imageType = file.mimetype.split("/")[0];
  if (imageType === "image") {
    return cb(null, true)
  } else {
    return cb(appError.create(httpStatusText.ERROR, 400, "file must be an image"), false)
  }
}
const upload = multer({ storage: diskStorage, fileFilter: fileFilter });

// end uploads

const adminController = require("../controllers/adminController");
const { validationSchema } = require("../middleware/valiUserMiddle");
const verifyToken = require("../middleware/verifyToken");
const allowedTo = require("../middleware/allowedTo");
const titleRoles = require("../utils/titleRoles");

// get all admins
router.get("/", verifyToken, allowedTo(titleRoles.ADMIN), adminController.getAdmins);
// get single admin
router.get("/:id", verifyToken, allowedTo(titleRoles.ADMIN, titleRoles.DOCTOR), adminController.getAdmin);
// add admin
router.post("/", verifyToken, allowedTo(titleRoles.ADMIN), upload.single("avatar"), validationSchema(), adminController.addAdmin);
// edit details for admin
router.patch("/:id", verifyToken, allowedTo(titleRoles.ADMIN), adminController.editAdmin);
// delete admin
router.delete("/:id", verifyToken, allowedTo(titleRoles.ADMIN), adminController.deleteAdmin);

// auth

router.post("/register", verifyToken, allowedTo(titleRoles.ADMIN), upload.single("avatar"), adminController.register);

router.post("/login", adminController.login);

module.exports = router;
const express = require("express");
const router = express.Router();
const appError = require("../utils/appError");
const httpStatusText = require("../utils/httpStatusText");

// start uploads

const multer = require("multer");
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const fileName = `user-${Date.now()}.${ext}`;
    cb(null, fileName);
  },
});
const fileFilter = (req, file, cb) => {
  const imageType = file.mimetype.split("/")[0];
  if (imageType === "image") {
    return cb(null, true);
  } else {
    return cb(
      appError.create(httpStatusText.ERROR, 400, "file must be an image"),
      false
    );
  }
};
const upload = multer({ storage: diskStorage, fileFilter: fileFilter });

// end uploads

const internalMedicineController = require("../controllers/internalMedicineController");
const { validationSchema } = require("../middleware/valiDoctorMiddle");
const verifyToken = require("../middleware/verifyToken");
const allowedTo = require("../middleware/allowedTo");
const titleRoles = require("../utils/titleRoles");

// get all Doctors
router.get("/", internalMedicineController.getDoctors);
// get single Doctor
router.get("/:id", internalMedicineController.getDoctor);
// add doctor
router.post("/", verifyToken, allowedTo(titleRoles.ADMIN), upload.single("avatar"), validationSchema(), internalMedicineController.addDoctor);
// edit details for doctor
router.patch("/:id", verifyToken, allowedTo(titleRoles.ADMIN), upload.single("avatar"), internalMedicineController.editDoctor);
// delete doctor
router.delete("/:id", verifyToken, allowedTo(titleRoles.ADMIN), internalMedicineController.deleteDoctor);

module.exports = router;

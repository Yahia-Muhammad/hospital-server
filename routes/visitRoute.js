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

const visitController = require("../controllers/visitController");
const { validationSchema } = require("../middleware/valiBookMiddle");
const verifyToken = require("../middleware/verifyToken");
const allowedTo = require("../middleware/allowedTo");
const titleRoles = require("../utils/titleRoles");

// get all visits
router.get("/", visitController.getVisits);
// get single visit
router.get("/:id", visitController.getVisit);
// add visit
router.post("/", upload.single("prescription"), visitController.addVisit);
// edit details for visit
router.patch("/:id", upload.single("prescription"), visitController.editVisit);
// delete visit
router.delete("/:id", visitController.deleteVisit);

module.exports = router;

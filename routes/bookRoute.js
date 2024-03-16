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

const bookController = require("../controllers/bookController");
const { validationSchema } = require("../middleware/valiBookMiddle");
const verifyToken = require("../middleware/verifyToken");
const allowedTo = require("../middleware/allowedTo");
const titleRoles = require("../utils/titleRoles");

// get all books
router.get("/", bookController.getBooks);
// get single book
router.get("/:id", bookController.getBook);
// add book
router.post("/", upload.single("prescription"), validationSchema(), bookController.addBook);
// edit details for book
router.patch("/:id", upload.single("prescription"), bookController.editBook);
// delete book
router.delete("/:id", bookController.deleteBook);

module.exports = router;

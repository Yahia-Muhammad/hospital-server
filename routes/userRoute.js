const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const { validationSchema } = require("../middleware/valiUserMiddle");
const verifyToken = require("../middleware/verifyToken");
const allowedTo = require("../middleware/allowedTo");
const titleRoles = require("../utils/titleRoles");

// get all users
router.get("/", userController.getUsers);
// get single user
router.get("/:id", userController.getUser);
// add user
router.post("/", verifyToken, allowedTo(titleRoles.ADMIN, titleRoles.USER), validationSchema(), userController.addUser);
// edit details for user
router.patch("/:id", verifyToken, allowedTo(titleRoles.ADMIN, titleRoles.DOCTOR, titleRoles.USER), userController.editUser);
// delete user
router.delete("/:id", verifyToken, allowedTo(titleRoles.ADMIN, titleRoles.USER), userController.deleteUser);
// auth
router.post("/register", userController.register);

router.post("/login", userController.login);

module.exports = router;
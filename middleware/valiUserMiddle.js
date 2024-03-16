const { body } = require("express-validator");

const validationSchema = () => {
  return [
    body("name").notEmpty().withMessage("invalid name"),
    body("email").notEmpty().withMessage("invalid email"),
    body("phone").notEmpty().withMessage("invalid phone"),
    body("password")
      .notEmpty()
      .withMessage("invalid password")
      .isLength({ min: 6 })
      .withMessage("the password must contain at least 6 characters"),
  ];
};

module.exports = {
  validationSchema,
};

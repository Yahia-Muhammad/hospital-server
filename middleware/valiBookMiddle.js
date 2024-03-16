const { body } = require("express-validator");

const validationSchema = () => {
    return [
        body("name").notEmpty().withMessage("invalid name"),
        body("gendr").notEmpty().withMessage("invalid gendr"),
        body("state").notEmpty().withMessage("invalid state"),
        body("date").notEmpty().withMessage("invalid date"),
        body("phone").notEmpty().withMessage("invalid phone"),
        body("attend").notEmpty().withMessage("invalid attend"),
        body("specialization").notEmpty().withMessage("specialization is require"),
        body("doctor").notEmpty().withMessage("invalid doctor"),
    ];
};

module.exports = {
    validationSchema,
};

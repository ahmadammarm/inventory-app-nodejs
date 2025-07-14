/* eslint-disable prettier/prettier */
const { validationResult } = require('express-validator');

const validate = (request, response, next) => {
    try {
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            const mappedErrors = {};
            errors.array().forEach(error => {
                mappedErrors[error.path] = error.msg;
            });
            return response.status(400).json({ errors: mappedErrors });
        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = validate;

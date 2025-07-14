/* eslint-disable prettier/prettier */
const {validationResult} = require('express-validator');

const validate = (request, response, next) => {
  try {
    const errors = validationResult(request);

    const mappedErrors = {};

    if (Object.keys(errors.errors).length !== 0) {
      errors.errors.map(error => {
        mappedErrors[error.path] = error.msg;
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = validate;

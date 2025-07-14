/* eslint-disable prettier/prettier */
const express = require('express');
const { createCategory } = require('../controllers/category-controller');
const { addCategoryValidation } = require('../utils/validations/categoryValidation');
const validate = require('../utils/validations/validate');
const categoryRouter = express.Router();

categoryRouter.post('/categories', addCategoryValidation, validate, createCategory);

module.exports = {
    categoryRouter,
}
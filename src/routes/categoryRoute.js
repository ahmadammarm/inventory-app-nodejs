/* eslint-disable prettier/prettier */
const express = require('express');
const { createCategory, getAllCategories, getCategoryById, deleteCategory, updateCategory } = require('../controllers/category-controller');
const { addCategoryValidation, categoryIdValidation } = require('../utils/validations/categoryValidation');
const validate = require('../utils/validations/validate');
const categoryRouter = express.Router();


categoryRouter.post('/categories', addCategoryValidation, validate, createCategory);
categoryRouter.get('/categories', getAllCategories);
categoryRouter.get('/category/:id', categoryIdValidation, validate, getCategoryById);
categoryRouter.put('/category/:id', addCategoryValidation, validate, updateCategory);
categoryRouter.delete('/category/:id', categoryIdValidation, validate, deleteCategory);

module.exports = {
    categoryRouter,
}
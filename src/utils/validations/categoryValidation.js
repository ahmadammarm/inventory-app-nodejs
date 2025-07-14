/* eslint-disable prettier/prettier */
const {check, param} = require('express-validator');

const prisma = require('../prisma');

const addCategoryValidation = [
  check('name')
    .notEmpty()
    .withMessage('Name is required')
    .isLength({min: 3, max: 50})
    .withMessage('Name must be between 3 and 50 characters long'),

  check('description')
    .optional()
    .isLength({max: 200})
    .withMessage('Description must not exceed 200 characters'),
];

module.exports = {
  addCategoryValidation,
};

const categoryIdValidation = [
  param('id').custom(async value => {
    const category = await prisma.category.findUnique({
      where: {id: parseInt(value, 10)},
    });

    if (!category) {
      throw new Error('Category not found');
    }

    return true;
  }),
];

module.exports = {
  addCategoryValidation,
  categoryIdValidation,
};

const {createCategoryService} = require('../services/category-services');

/* eslint-disable prettier/prettier */
const createCategory = async (request, response, next) => {
  try {
    const {name} = request.body;

    const result = await createCategoryService({
      name,
    });

    response.status(201).json({
      status: 'success',
      message: 'Category created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
};

const {
  createCategoryService,
  getAllCategoriesService,
  getCategoryByIdService,
  updateCategoryService,
  deleteCategoryService,
} = require('../services/category-services');

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

const getAllCategories = async (_, response, next) => {
  try {
    const categories = await getAllCategoriesService();

    response.status(200).json({
      status: 'success',
      message: 'Categories fetched successfully',
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

const getCategoryById = async (request, response, next) => {
  try {
    const {id} = request.params;

    const category = await getCategoryByIdService(id);

    response.status(200).json({
      status: 'success',
      message: 'Category fetched successfully',
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (request, response, next) => {
  try {
    const {id} = request.params;
    const {name} = request.body;

    const updatedCategory = await updateCategoryService(id, {
      name,
    });

    response.status(200).json({
      status: 'success',
      message: 'Category updated successfully',
      data: updatedCategory,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (request, response, next) => {
  try {
    const {id} = request.params;

    const deletedCategory = await deleteCategoryService(id);

    if (!deletedCategory) {
      return response.status(404).json({
        status: 'error',
        message: 'Category not found',
      });
    }

    response.status(200).json({
      status: 'success',
      message: 'Category deleted successfully',
      data: deletedCategory,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};

/* eslint-disable prettier/prettier */
const prisma = require('../utils/prisma');

const getAllCategoriesService = async () => {
    try {
        const categories = await prisma.category.findMany({
            orderBy: {createdAt: 'desc'},
        });

        if (!categories || categories.length === 0) {
            throw new Error('No categories found');
        }

        return categories;
    } catch (error) {
        throw new Error('Error fetching categories');
    }
}

const getCategoryByIdService = async (id) => {
  try {
    const category = await prisma.category.findUnique({
      where: {id: Number(id)},
    });

    if (!category) {
      throw new Error('Category not found');
    }

    return category;

  } catch (error) {
    throw new Error('Error fetching category');
  }
};

const createCategoryService = async (data) => {
    try {
        const category = await prisma.category.create({
            data: {
                name: data.name,
            },
        });

        if (!category || !category.id) {
            throw new Error('Category creation failed');
        }

        return category;
    } catch (error) {
        throw new Error('Error creating category');
    }
};

const updateCategoryService = async (id, data) => {
    try {
        const category = await prisma.category.update({
            where: { id: Number(id) },
            data: {
                name: data.name,
            },
        });

        if (!category || !category.id) {
            throw new Error('Category update failed');
        }

        return category;
    } catch (error) {
        throw new Error('Error updating category');
    }
};


const deleteCategoryService = async (id) => {
    try {
        const category = await prisma.category.delete({
            where: {id: Number(id)},
        });

        if (!category || !category.id) {
            throw new Error('Category deletion failed');
        }

        return category;
    } catch (error) {
        throw new Error('Error deleting category');
    }
}

module.exports = {
    getAllCategoriesService,
    getCategoryByIdService,
    createCategoryService,
    updateCategoryService,
    deleteCategoryService
};
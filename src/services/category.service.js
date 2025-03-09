// services/category.service.js
const Category = require("../models/category.model");

const CategoryService = {
  createCategory: async (categoryName) => {
    return await Category.create(categoryName);
  },
  getAllCategories: async () => {
    return await Category.findAll();
  },
  updateCategory: async (uuid, categoryName) => {
    return await Category.update(uuid, categoryName);
  },
  deleteCategory: async (uuid) => {
    return await Category.delete(uuid);
  },
};

module.exports = CategoryService;

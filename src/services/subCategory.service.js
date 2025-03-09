// services/subCategory.service.js
const SubCategory = require("../models/subCategory.model");

const SubCategoryService = {
  createSubCategory: async (subCategoryName, parent) => {
    return await SubCategory.create(subCategoryName, parent);
  },
  getSubCategoriesByParent: async (parent) => {
    return await SubCategory.findAllByParent(parent);
  },
  updateSubCategory: async (uuid, subCategoryName, parent) => {
    return await SubCategory.update(uuid, subCategoryName, parent);
  },
  deleteSubCategory: async (uuid) => {
    return await SubCategory.delete(uuid);
  },
};

module.exports = SubCategoryService;

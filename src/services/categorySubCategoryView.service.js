const CategorySubCategoryView = require('../models/categorySubCategoryView.model');

const categorySubCategoryViewService = {
    getByCategoryId: async (uuid) => {
        return await CategorySubCategoryView.getByCategoryId(uuid);
    },
    getAll: async () => {
        return await CategorySubCategoryView.getAll();
    }
}
module.exports = categorySubCategoryViewService;
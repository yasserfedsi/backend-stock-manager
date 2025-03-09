const ComponentCategoryViewModel = require('../models/componentCategoryView.model');

const componentCategoryViewService = {
    getAll: async () => {
        return await  ComponentCategoryViewModel.getAll();
    },
    getByCategoryId: async (uuid) => {
        return await ComponentCategoryViewModel.getByCategoryId(uuid);
    }
};

module.exports = componentCategoryViewService;
const componentSubCategoryViewModel = require('../models/componentSubCategoryView.model');

const componentSubCategoryViewService = {
    getAll: async () => {
        return await componentSubCategoryViewModel.getAll();
    },
    getBySubCategoryId: async (uuid) => {
        return await componentSubCategoryViewModel.getBySubCategoryId(uuid);
    }
}

module.exports = componentSubCategoryViewService;
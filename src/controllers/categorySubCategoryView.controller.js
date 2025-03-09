const categorySubCategoryViewService = require('../services/categorySubCategoryView.service');

const categorySubCategoryViewController =  {
    getAll: async (req, res) => {
        try{
            const categorySubCategoryView = await categorySubCategoryViewService.getAll();
            res.status(200).json(categorySubCategoryView);
        }catch(err){
            res.status(500).json({ message: err.message});
        }
    },
    getByCategoryId: async (req, res) => {
        const { uuid } = req.params;
        try{
            const categorySubCategoryView = await categorySubCategoryViewService.getByCategoryId(uuid);
            res.status(200).json(categorySubCategoryView);
        }catch(err){
            res.status(500).json({ message: err.message});
        }
    }
}

module.exports = categorySubCategoryViewController;
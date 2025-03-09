const componentSubCategoryViewService = require('../services/componentSubCategoryView.service');

const componentSubCategoryViewController =  {
    getAll: async (req, res) => {
        try{
            const componentSubCategoryView = await componentSubCategoryViewService.getAll();
            res.status(200).json(componentSubCategoryView);
        }catch(err){
            res.status(500).json({ message: err.message});
        }
    },
    getBySubCategoryId: async (req, res) => {
        const { uuid } = req.params;
        try{
            const componentSubCategoryView = await componentSubCategoryViewService.getBySubCategoryId(uuid);
            res.status(200).json(componentSubCategoryView);
        }catch(err){
            res.status(500).json({ message: err.message});
        }
    }
}

module.exports = componentSubCategoryViewController;
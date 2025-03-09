const componentCategoryViewService = require('../services/componentCategoryView.service');

const componentCategoryViewController =  {
    getAll: async (req, res) => {
        try{
            const componentCategoryView = await componentCategoryViewService.getAll();
            res.status(200).json(componentCategoryView);
        }catch(err){
            res.status(500).json({ message: err.message});
        }
    },
    getByCategoryId: async (req, res) => {
        const { uuid } = req.params;
        try{
            const componentCategoryView = await componentCategoryViewService.getByCategoryId(uuid);
            res.status(200).json(componentCategoryView);
        }catch(err){
            res.status(500).json({ message: err.message});
        }
    }
}

module.exports = componentCategoryViewController;
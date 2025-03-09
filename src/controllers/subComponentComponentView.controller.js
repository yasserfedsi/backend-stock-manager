const subComponentComponentViewController = require('../services/subComponentComponentView.service');

const subComponentComponentViewController =  {
    getAll: async (req, res) => {
        try{
            const subComponentComponentView = await subComponentComponentViewController.getAll();
            res.status(200).json(subComponentComponentView);
        }catch(err){
            res.status(500).json({ message: err.message});
        }
    },
    getByCategoryId: async (req, res) => {
        const { uuid } = req.params;
        try{
            const subComponentComponentView = await subComponentComponentViewController.getByCategoryId(uuid);
            res.status(200).json(subComponentComponentView);
        }catch(err){
            res.status(500).json({ message: err.message});
        }
    }
}

module.exports = subComponentComponentViewController;
const subComponentComponentViewModel = require('../models/subComponentComponentView.model');

const subComponentComponentViewService = {
    getAll: async ()=>{
        return await subComponentComponentViewModel.getAll();
    },
    getByComponentId: async (uuid)=>{
        return await subComponentComponentViewModel.getByComponentId(uuid);
    }
};

module.exports = subComponentComponentViewService;
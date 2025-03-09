// services/subComponent.service.js
const SubComponent = require("../models/subComponent.model");

const SubComponentService = {
  createSubComponent: async (super_uuid, place, note) => {
    return await SubComponent.create(super_uuid, place, note);
  },
  getSubComponentsByComponent: async (super_uuid) => {
    return await SubComponent.findAllByComponent(super_uuid);
  },
  updateSubComponent: async (uuid, super_uuid, place, note) => {
    return await SubComponent.update(uuid, super_uuid, place, note);
  },
  deleteSubComponent: async (uuid) => {
    return await SubComponent.delete(uuid);
  },
};

module.exports = SubComponentService;

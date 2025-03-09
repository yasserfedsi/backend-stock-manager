// services/component.service.js
const Component = require("../models/component.model");

const ComponentService = {
  createComponent: async (
    reference,
    quantity,
    date_checked,
    category,
    sub_category
  ) => {
    return await Component.create(
      reference,
      quantity,
      date_checked,
      category,
      sub_category
    );
  },
  getAllComponents: async () => {
    return await Component.findAll();
  },
  getComponentsByCategory: async (category) => {
    return await Component.findByCategory(category);
  },
  getComponentsBySubCategory: async (sub_category) => {
    return await Component.findBySubCategory(sub_category);
  },
  updateComponent: async (
    uuid,
    reference,
    quantity,
    date_checked,
    category,
    sub_category
  ) => {
    return await Component.update(
      uuid,
      reference,
      quantity,
      date_checked,
      category,
      sub_category
    );
  },
  deleteComponent: async (uuid) => {
    return await Component.delete(uuid);
  },
};

module.exports = ComponentService;

const ComponentService = require("../services/component.service");

const ComponentController = {
  createComponent: async (req, res) => {
    const { reference, quantity, date_checked, category, sub_category } =
      req.body;
    try {
      const component = await ComponentService.createComponent(
        reference,
        quantity,
        date_checked,
        category,
        sub_category
      );
      res.status(201).json(component);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getAllComponents: async (req, res) => {
    try {
      const components = await ComponentService.getAllComponents();
      res.status(200).json(components);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getComponentsByCategory: async (req, res) => {
    const { uuid } = req.params;
    try {
      const components = await ComponentService.getComponentsByCategory(uuid);
      res.status(200).json(components);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getComponentsBySubCategory: async (req, res) => {
    const { uuid } = req.params;
    try {
      const components = await ComponentService.getComponentsBySubCategory(
        uuid
      );
      res.status(200).json(components);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  updateComponent: async (req, res) => {
    const { uuid } = req.params;
    const { reference, quantity, date_checked, category, sub_category } =
      req.body;
    try {
      const component = await ComponentService.updateComponent(
        uuid,
        reference,
        quantity,
        date_checked,
        category,
        sub_category
      );
      res.status(200).json(component);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  deleteComponent: async (req, res) => {
    const { uuid } = req.params;
    try {
      await ComponentService.deleteComponent(uuid);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = ComponentController;

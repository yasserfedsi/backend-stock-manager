const SubComponentService = require("../services/subComponent.service");

const SubComponentController = {
  createSubComponent: async (req, res) => {
    const { super_uuid, place, note } = req.body;
    try {
      const subComponent = await SubComponentService.createSubComponent(
        super_uuid,
        place,
        note
      );
      res.status(201).json(subComponent);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getSubComponentsByComponent: async (req, res) => {
    const { uuid } = req.params;
    try {
      const subComponents =
        await SubComponentService.getSubComponentsByComponent(uuid);
      res.status(200).json(subComponents);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  updateSubComponent: async (req, res) => {
    const { uuid } = req.params;
    const { super_uuid, place, note } = req.body;
    try {
      const subComponent = await SubComponentService.updateSubComponent(
        uuid,
        super_uuid,
        place,
        note
      );
      res.status(200).json(subComponent);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  deleteSubComponent: async (req, res) => {
    const { uuid } = req.params;
    try {
      await SubComponentService.deleteSubComponent(uuid);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = SubComponentController;

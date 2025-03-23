const CategoryService = require("../services/category.service");

const CategoryController = {
  createCategory: async (req, res) => {
    const { categoryName } = req.body;
    try {
      const category = await CategoryService.createCategory(categoryName);
      res.status(201).json(category);
    } catch (err) {
      /* console.error(err); */
      res.status(500).json({ error: err.message });
    }
  },
  getAllCategories: async (req, res) => {
    try {
      const categories = await CategoryService.getAllCategories();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  updateCategory: async (req, res) => {
    const { uuid } = req.params;
    const { categoryName } = req.body;
    try {
      const category = await CategoryService.updateCategory(uuid, categoryName);
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  deleteCategory: async (req, res) => {
    const { uuid } = req.params;
    try {
      await CategoryService.deleteCategory(uuid);
      res.status(200).json({
        message: `Category with uuid: ${uuid} deleted successfully`,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = CategoryController;

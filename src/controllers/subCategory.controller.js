const SubCategoryService = require("../services/subCategory.service");

const SubCategoryController = {
  createSubCategory: async (req, res) => {
    const { subCategoryName, parent } = req.body;
    try {
      const subCategory = await SubCategoryService.createSubCategory(
        subCategoryName,
        parent
      );
      res.status(201).json(subCategory);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getSubCategoriesByParent: async (req, res) => {
    const { uuid } = req.params;
    try {
      const subCategories = await SubCategoryService.getSubCategoriesByParent(
        uuid
      );
      res.status(200).json(subCategories);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  updateSubCategory: async (req, res) => {
    const { uuid } = req.params;
    const { subCategoryName, parent } = req.body;
    try {
      const subCategory = await SubCategoryService.updateSubCategory(
        uuid,
        subCategoryName,
        parent
      );
      res.status(200).json(subCategory);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  deleteSubCategory: async (req, res) => {
    const { uuid } = req.params;
    try {
      await SubCategoryService.deleteSubCategory(uuid);
      res.status(200).json({
        message: `SubCategory with uuid: ${uuid} has been deleted`
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = SubCategoryController;

const sql = require("../config/db");

const SubCategory = {
  create: async (subCategoryName, parent) => {
    return sql`
      INSERT INTO component_manager.sub_category (subCategoryName, parent)
      VALUES (${subCategoryName}, ${parent}) RETURNING *;
    `;
  },
  findAllByParent: async (parent) => {
    return sql`SELECT *
               FROM component_manager.sub_category
               WHERE parent = ${parent};`;
  },
  update: async (uuid, subCategoryName, parent) => {
    return sql`
      UPDATE component_manager.sub_category
      SET subCategoryName = ${subCategoryName},
          parent          = ${parent}
      WHERE uuid = ${uuid} RETURNING *;
    `;
  },
  delete: async (uuid) => {
    return sql`DELETE
               FROM component_manager.sub_category
               WHERE uuid = ${uuid};`;
  },
};

module.exports = SubCategory;

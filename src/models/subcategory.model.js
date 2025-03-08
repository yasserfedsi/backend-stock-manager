const sql = require("../config/db");

const SubCategory = {
  create: async (subCategoryName, parent) => {
    return await sql`
            INSERT INTO component_manager.sub_category (subCategoryName, parent)
            VALUES (${subCategoryName}, ${parent})
            RETURNING *;
        `;
  },
  findAllByParent: async (parent) => {
    return await sql`SELECT * FROM component_manager.sub_category WHERE parent = ${parent};`;
  },
  update: async (uuid, subCategoryName, parent) => {
    return await sql`
            UPDATE component_manager.sub_category
            SET subCategoryName = ${subCategoryName}, parent = ${parent}
            WHERE uuid = ${uuid}
            RETURNING *;
        `;
  },
  delete: async (uuid) => {
    return await sql`DELETE FROM component_manager.sub_category WHERE uuid = ${uuid};`;
  },
};

module.exports = SubCategory;

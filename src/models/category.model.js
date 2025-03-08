const sql = require("../config/db");

const Category = {
  create: async (categoryName) => {
    return await sql`
            INSERT INTO component_manager.category (categoryName)
            VALUES (${categoryName})
            RETURNING *;
        `;
  },
  findAll: async () => {
    return await sql`SELECT * FROM component_manager.category;`;
  },
  update: async (uuid, categoryName) => {
    return await sql`
            UPDATE component_manager.category
            SET categoryName = ${categoryName}
            WHERE uuid = ${uuid}
            RETURNING *;
        `;
  },
  delete: async (uuid) => {
    return await sql`DELETE FROM component_manager.category WHERE uuid = ${uuid};`;
  },
};

module.exports = Category;

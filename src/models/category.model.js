const sql = require("../config/db");

const Category = {
  create: async (category_name) => {
    return sql`
      INSERT INTO component_manager.category (category_name)
      VALUES (${category_name}) RETURNING *;
    `;
  },
  findAll: async () => {
    return sql`SELECT *
               FROM component_manager.category;`;
  },
  update: async (uuid, category_name) => {
    return sql`
      UPDATE component_manager.category
      SET category_name = ${category_name}
      WHERE uuid = ${uuid} RETURNING *;
    `;
  },
  delete: async (uuid) => {
    return sql`DELETE
               FROM component_manager.category
               WHERE uuid = ${uuid};`;
  },
};

module.exports = Category;

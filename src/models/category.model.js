const sql = require("../config/db");

const Category = {
  create: async (category_name) => {
    console.log("category_name: ", category_name);
    return await sql`
            INSERT INTO component_manager.category (category_name)
            VALUES (${category_name})
            RETURNING *;
        `;
  },
  findAll: async () => {
    return await sql`SELECT * FROM component_manager.category;`;
  },
  update: async (uuid, category_name) => {
    return await sql`
            UPDATE component_manager.category
            SET category_name = ${category_name}
            WHERE uuid = ${uuid}
            RETURNING *;
        `;
  },
  delete: async (uuid) => {
    return await sql`DELETE FROM component_manager.category WHERE uuid = ${uuid};`;
  },
};

module.exports = Category;

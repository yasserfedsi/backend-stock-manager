const sql = require("../config/db");

const Component = {
  create: async (reference, quantity, date_checked, category, sub_category) => {
    return await sql`
            INSERT INTO component_manager.component (reference, quantity, date_checked, category, sub_category)
            VALUES (${reference}, ${quantity}, ${date_checked}, ${category}, ${sub_category})
            RETURNING *;
        `;
  },
  findAll: async () => {
    return await sql`SELECT * FROM component_manager.component;`;
  },
  findByCategory: async (category) => {
    return await sql`SELECT * FROM component_manager.component WHERE category = ${category};`;
  },
  findBySubCategory: async (sub_category) => {
    return await sql`SELECT * FROM component_manager.component WHERE sub_category = ${sub_category};`;
  },
  update: async (
    uuid,
    reference,
    quantity,
    date_checked,
    category,
    sub_category
  ) => {
    return await sql`
            UPDATE component_manager.component
            SET reference = ${reference}, quantity = ${quantity}, date_checked = ${date_checked}, category = ${category}, sub_category = ${sub_category}
            WHERE uuid = ${uuid}
            RETURNING *;
        `;
  },
  delete: async (uuid) => {
    return await sql`DELETE FROM component_manager.component WHERE uuid = ${uuid};`;
  },
};

module.exports = Component;

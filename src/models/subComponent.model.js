const sql = require("../config/db");

const SubComponent = {
  create: async (super_uuid, place, note) => {
    return sql`
      INSERT INTO component_manager.sub_component (super_uuid, place, note)
      VALUES (${super_uuid}, ${place}, ${note})
      RETURNING *;
    `;
  },
  findAllByComponent: async (super_uuid) => {
    return sql`SELECT *
               FROM component_manager.sub_component
               WHERE super_uuid = ${super_uuid};`;
  },
  update: async (uuid, super_uuid, place, note) => {
    return sql`
      UPDATE component_manager.sub_component
      SET super_uuid = ${super_uuid},
          place      = ${place},
          note       = ${note}
      WHERE uuid = ${uuid}
      RETURNING *;
    `;
  },
  delete: async (uuid) => {
    return sql`DELETE
               FROM component_manager.sub_component
               WHERE uuid = ${uuid};`;
  },
};

module.exports = SubComponent;

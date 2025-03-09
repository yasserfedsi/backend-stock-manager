const sql = require('./../config/db');

const SubComponentComponentViewModel = {
    getAll: () => {
        return sql.query('SELECT * FROM component_manager.sub_component_component_view');
    },
    getByComponentId: (uuid) => {
        return sql.query('SELECT * FROM component_manager.sub_component_component_view WHERE component_uuid = ?', uuid);
    }
}

module.exports = SubComponentComponentViewModel;
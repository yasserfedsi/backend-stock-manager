const sql = require('./../config/db');

const ComponentCategoryViewModel = {
    getAll: () => {
        return sql.query('SELECT * FROM component_manager.component_category_view');
    },
    getByCategoryId: (uuid) => {
        return sql.query('SELECT * FROM component_manager.component_category_view WHERE category_uuid = ?', uuid);
    }
}

module.exports = ComponentCategoryViewModel;
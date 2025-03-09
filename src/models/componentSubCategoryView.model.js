const sql = require('./../config/db');

const ComponentSubCategoryViewModel = {
    getAll: () => {
        return sql.query('SELECT * FROM component_manager.component_sub_category_view');
    },
    getBySubCategoryId: (uuid) => {
        return sql.query('SELECT * FROM component_manager.component_sub_category_view WHERE category_uuid = ?', uuid);
    }
}
module.exports = ComponentSubCategoryViewModel;
const sql = require('./../config/db');

const CategorySubCategoryViewModel = {
    getByCategoryId: (uuid) => {
        return sql.query('SELECT * FROM component_manager.category_sub_category_view WHERE category_uuid = ?', uuid);
    },
    getAll: () => {
        return sql.query('SELECT * FROM component_manager.category_sub_category_view');
    }
}

module.exports = CategorySubCategoryViewModel;
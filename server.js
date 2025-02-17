const express = require('express');
const postgres = require('postgres');
const env = require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const sql = postgres(process.env.DATABASE_URL);

// Create a new category
app.post('/categories', async (req, res) => {
    const { categoryName } = req.body;
    try {
        const category = await sql`
            INSERT INTO component_manager.category (categoryName)
            VALUES (${categoryName})
            RETURNING *;
        `;
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all categories
app.get('/api/categories', async (req, res) => {
    try {
        const categories = await sql`SELECT * FROM component_manager.category;`;
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a category
app.put('/api/categories/:uuid', async (req, res) => {
    const { uuid } = req.params;
    const { categoryName } = req.body;
    try {
        const category = await sql`
            UPDATE component_manager.category
            SET categoryName = ${categoryName}
            WHERE uuid = ${uuid}
            RETURNING *;
        `;
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a category
app.delete('/api/categories/:uuid', async (req, res) => {
    const { uuid } = req.params;
    try {
        await sql`DELETE FROM component_manager.category WHERE uuid = ${uuid};`;
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new sub-category
app.post('/sub-categories', async (req, res) => {
    const { subCategoryName, parent } = req.body;
    try {
        const subCategory = await sql`
            INSERT INTO component_manager.sub_category (subCategoryName, parent)
            VALUES (${subCategoryName}, ${parent})
            RETURNING *;
        `;
        res.status(201).json(subCategory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all sub-categories by category uuid
app.get('/api/sub-categories/:uuid', async (req, res) => {
    const {uuid} = req.params;
    try {
        const subCategories = await sql`SELECT * FROM component_manager.sub_category WHERE uuid = ${uuid};`;
        res.status(200).json(subCategories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a sub-category
app.put('/api/sub-categories/:uuid', async (req, res) => {
    const { uuid } = req.params;
    const { subCategoryName, parent } = req.body;
    try {
        const subCategory = await sql`
            UPDATE component_manager.sub_category
            SET subCategoryName = ${subCategoryName}, parent = ${parent}
            WHERE uuid = ${uuid}
            RETURNING *;
        `;
        res.status(200).json(subCategory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a sub-category
app.delete('/api/sub-categories/:uuid', async (req, res) => {
    const { uuid } = req.params;
    try {
        await sql`DELETE FROM component_manager.sub_category WHERE uuid = ${uuid};`;
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new component
app.post('/components', async (req, res) => {
    const { reference, quantity, date_checked, category, sub_category } = req.body;
    try {
        const component = await sql`
            INSERT INTO component_manager.component (reference, quantity, date_checked, category, sub_category)
            VALUES (${reference}, ${quantity}, ${date_checked}, ${category}, ${sub_category})
            RETURNING *;
        `;
        res.status(201).json(component);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all components
app.get('/api/components', async (req, res) => {
    try {
        const components = await sql`SELECT * FROM component_manager.component;`;
        res.status(200).json(components);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Get a single component by category
app.get('/api/components/category/:uuid', async (req, res) => {
    const { uuid } = req.params;
    try {
        const component = await sql`
            SELECT * FROM component_manager.component WHERE category = ${uuid};
        `;
        res.status(200).json(component);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a single component by sub_category
app.get('/api/components/sub_category/:uuid', async (req, res) => {
    const { uuid } = req.params;
    try {
        const component = await sql`
            SELECT * FROM component_manager.component WHERE sub_category = ${uuid};
        `;
        res.status(200).json(component);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a component
app.put('/api/components/:uuid', async (req, res) => {
    const { uuid } = req.params;
    const { reference, quantity, date_checked, category, sub_category } = req.body;
    try {
        const component = await sql`
            UPDATE component_manager.component
            SET reference = ${reference}, quantity = ${quantity}, date_checked = ${date_checked}, category = ${category}, sub_category = ${sub_category}
            WHERE uuid = ${uuid}
            RETURNING *;
        `;
        res.status(200).json(component);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a component
app.delete('/api/components/:uuid', async (req, res) => {
    const { uuid } = req.params;
    try {
        await sql`DELETE FROM component_manager.component WHERE uuid = ${uuid};`;
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Create a new sub-component
app.post('/api/sub-components', async (req, res) => {
    const { super_uuid, place, note } = req.body;
    try {
        const subComponent = await sql`
            INSERT INTO component_manager.sub_component (super_uuid, place, note)
            VALUES (${super_uuid}, ${place}, ${note})
            RETURNING *;
        `;
        res.status(201).json(subComponent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all sub-components by component
app.get('/api/sub-components/component/:uuid', async (req, res) => {
    const {uuid} = req.params;
    try {
        const subComponents = await sql`SELECT * FROM component_manager.sub_component WHERE super_uuid = ${uuid};`;
        res.status(200).json(subComponents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a sub-component
app.put('/api/sub-components/:uuid', async (req, res) => {
    const { uuid } = req.params;
    const { super_uuid, place, note } = req.body;
    try {
        const subComponent = await sql`
            UPDATE component_manager.sub_component
            SET super_uuid = ${super_uuid}, place = ${place}, note = ${note}
            WHERE uuid = ${uuid}
            RETURNING *;
        `;
        res.status(200).json(subComponent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a sub-component
app.delete('/api/sub-components/:uuid', async (req, res) => {
    const { uuid } = req.params;
    try {
        await sql`DELETE FROM component_manager.sub_component WHERE uuid = ${uuid};`;
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
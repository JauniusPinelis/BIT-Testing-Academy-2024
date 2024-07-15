const pool = require('./db');

// CRUD operations for Shops
const getShops = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM shops');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getShopById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM shops WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createShop = async (req, res) => {
    const { name, address } = req.body;
    try {
        const result = await pool.query('INSERT INTO shops (name, address) VALUES ($1, $2) RETURNING *', [name, address]);
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateShop = async (req, res) => {
    const { id } = req.params;
    const { name, address } = req.body;
    try {
        const result = await pool.query('UPDATE shops SET name = $1, address = $2 WHERE id = $3 RETURNING *', [name, address, id]);
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteShop = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM shops WHERE id = $1', [id]);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// CRUD operations for Shop Items
const getShopItems = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM shop_items');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getShopItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM shop_items WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createShopItem = async (req, res) => {
    const { name, price, shopId } = req.body;
    try {
        const result = await pool.query('INSERT INTO shop_items (name, price, shop_id) VALUES ($1, $2, $3) RETURNING *', [name, price, shopId]);
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateShopItem = async (req, res) => {
    const { id } = req.params;
    const { name, price, shopId } = req.body;
    try {
        const result = await pool.query('UPDATE shop_items SET name = $1, price = $2, shop_id = $3 WHERE id = $4 RETURNING *', [name, price, shopId, id]);
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteShopItem = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM shop_items WHERE id = $1', [id]);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getShops,
    getShopById,
    createShop,
    updateShop,
    deleteShop,
    getShopItems,
    getShopItemById,
    createShopItem,
    updateShopItem,
    deleteShopItem
};

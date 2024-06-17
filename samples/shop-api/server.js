const express = require('express');
const app = express();
const port = 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Middleware to parse JSON bodies
app.use(express.json());

let shopItems = [];
let nextId = 1;

const swaggerDocument = require('./swagger.json');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Create a new shop item
app.post('/shopItems', (req, res) => {
    const { name, price } = req.body;
    const newItem = { id: nextId++, name, price };
    shopItems.push(newItem);
    res.status(201).json(newItem);
});


// Get all shop items
app.get('/shopItems', (req, res) => {
    res.json(shopItems);
});

// Get a single shop item by ID
app.get('/shopItems/:id', (req, res) => {
    const { id } = req.params;
    const item = shopItems.find(i => i.id == id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

// Update a shop item by ID
app.put('/shopItems/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const item = shopItems.find(i => i.id == id);
    if (item) {
        item.name = name;
        item.price = price;
        res.json(item);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

// Delete a shop item by ID
app.delete('/shopItems/:id', (req, res) => {
    const { id } = req.params;
    const index = shopItems.findIndex(i => i.id == id);
    if (index !== -1) {
        shopItems.splice(index, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

app.listen(port, () => {
    console.log(`ShopItems API listening at http://localhost:${port}`);
});

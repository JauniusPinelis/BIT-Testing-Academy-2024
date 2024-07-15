const express = require('express');
const {
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
} = require('./controllers');

const router = express.Router();

// Shop routes
router.get('/shops', getShops);
router.get('/shops/:id', getShopById);
router.post('/shops', createShop);
router.put('/shops/:id', updateShop);
router.delete('/shops/:id', deleteShop);

// ShopItem routes
router.get('/shopitems', getShopItems);
router.get('/shopitems/:id', getShopItemById);
router.post('/shopitems', createShopItem);
router.put('/shopitems/:id', updateShopItem);
router.delete('/shopitems/:id', deleteShopItem);

module.exports = router;

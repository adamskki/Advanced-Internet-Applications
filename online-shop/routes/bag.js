const path = require('path');

const express = require('express');

const bagController = require('../controllers/bag-items');

const router = express.Router();

router.get('/bag', bagController.displayBagProducts);

router.post('/bag', bagController.removeItem);

router.post('/remove-all', bagController.removeAll);

router.post('/buy', bagController.buyAll);


module.exports = router;

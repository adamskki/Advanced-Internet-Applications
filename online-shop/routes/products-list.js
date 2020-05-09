const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/',productsController.displayProducts);

router.post('/add-to-bag', (req,res,next)=>{
    req.session.bag.push(req.body.id);
    const array = req.session.bag;
    var unique = array.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })
    req.session.bag = unique;
    res.redirect('/');
});


module.exports = router;

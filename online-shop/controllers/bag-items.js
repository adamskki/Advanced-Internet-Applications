const bagProduct = require('../model/product');

exports.displayBagProducts = (req, res, next) => {
    const selectedProducts = [];
    bagProduct.fetchAll()
    .then(([rows, fieldData]) => {
        const productsArray = [...rows];
        productsArray.map( product => {
            if(req.session.bag.includes(product.id.toString())){
                selectedProducts.push(product);
            }
        })
        res.render('bag', {
            prods: selectedProducts,
        });
    })
    .catch(err => {
        console.log(err);
    })
};

exports.removeItem = (req, res, next) => {
    const index = req.session.bag.indexOf(req.body.id.toString());
    req.session.bag.splice(index,1);
    res.redirect('/bag');
};

exports.removeAll = (req, res, next) => {
    req.session.bag.splice(0, req.session.bag.length);
    req.session.deleteAll = true;
    res.redirect('/');
};

exports.buyAll = (req, res, next) => {
    const selectedProducts = [];
    const sessionBagProducts = [];
    bagProduct.fetchAll()
    .then(([rows, fieldData]) => {
        const productsArray = [...rows];
        productsArray.map( product => {
            if(req.session.bag.includes(product.id.toString())){
                selectedProducts.push(product);
            }
        })
        req.session.bag.map( id => {
            sessionBagProducts.push(parseInt(id));
        })
        if(sessionBagProducts.length == selectedProducts.length){
            bagProduct.deleteAll(sessionBagProducts)
            .then( () => {
                req.session.bag = [];
                req.session.buyAllSuccess = true;
                res.redirect('/');
            })
            .catch( err => {
                console.log(err);
            })
        }
        else {
            req.session.bag = [];
            req.session.buyAllError = true;
            res.redirect('/');
        }

    })
    .catch(err => {
        console.log(err);
    })
};

  
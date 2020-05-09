const Product = require('../model/product');

exports.displayProducts = (req, res, next) => {

    if(req.session.deleteAllPrevious === true) {
        req.session.deleteAll = false;
        req.session.deleteAllPrevious = false;
    }

    if(req.session.deleteAll === true) {
        req.session.deleteAllPrevious = true;
    }

    if(req.session.buyAllSuccessPrevious === true) {
        req.session.buyAllSuccess = false;
        req.session.buyAllSuccessPrevious = false;
    }

    if(req.session.buyAllSuccess === true) {
        req.session.buyAllSuccessPrevious = true;
    }

    if(req.session.buyAllErrorPrevious === true) {
        req.session.buyAllError = false;
        req.session.buyAllErrorPrevious = false;
    }

    if(req.session.buyAllError === true) {
        req.session.buyAllErrorPrevious = true;
    }

    Product.fetchAll()
    .then(([rows, fieldData]) => {
        res.render('products-list', {
            prods: rows,
            deleteAll: req.session.deleteAll,
            buyAllSuccess: req.session.buyAllSuccess,
            buyAllError: req.session.buyAllError,
        })
    })
    .catch(err => {
        console.log(err);
    })

};

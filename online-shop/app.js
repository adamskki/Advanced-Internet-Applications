const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config()

const app = express();

app.use(express.static(__dirname + '/style'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(session({
    secret: 'my-secret-used-for-security',
    resave: false,
    saveUninitialized: false,
}));


app.set('view engine', 'ejs');
app.set('views', 'views');

const productsRoutes = require('./routes/products-list');
const bagRoutes = require('./routes/bag');


app.use((req,res,next) => {
    if(!Array.isArray(req.session.bag)){
        req.session.bag = [],
        req.session.deleteAll = false,
        req.session.deleteAllPrevious = false,
        req.session.buyAllSuccess = false,
        req.session.buyAllSuccessPrevious = false,
        req.session.buyAllError = false,
        req.session.buyAllErrorPrevious = false;
    }
    next();
});

app.use(productsRoutes);
app.use(bagRoutes);


app.listen(3000);
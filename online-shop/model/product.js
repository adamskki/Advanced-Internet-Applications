const db = require('../util/database');

module.exports = class Product {
  constructor(id, title, imageUrl, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
  }

  static deleteAll(idArray) {
    return db.query(`DELETE FROM products WHERE id IN (${'?'.repeat(idArray.length).split('').join(',')})`, idArray);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }


};
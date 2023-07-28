// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: category_id
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(ProductTag {
  foreignKey: product_id
});

// Tags belongToMany Products (through ProductTag)
Tag belongsToMany(ProductTag {
  foreignKey: 
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

const { DataTypes } = require('sequelize'); // Імпортуємо DataTypes
const sequelize = require('../db'); // Імпортуємо ваш екземпляр sequelize

const Brends=sequelize.define('brend',{
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: {type:DataTypes.STRING,allowNull:false},
})

const CountryMade = sequelize.define('countryMade', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nameuk: { type: DataTypes.STRING, allowNull: false, unique: true },
  nameru: { type: DataTypes.STRING, allowNull: false, unique: true },
});

const Category = sequelize.define('category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nameuk: { type: DataTypes.STRING, allowNull: false, unique: true },
  nameru: { type: DataTypes.STRING, allowNull: false, unique: true },
  svg: { type: DataTypes.TEXT, allowNull: false },
  url:{type:DataTypes.STRING,allowNull:false}
});

const FilterCategory = sequelize.define('filterCategory', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nameuk: { type: DataTypes.STRING, allowNull: false },
  nameru: { type: DataTypes.STRING, allowNull: false },
});

Category.hasMany(FilterCategory);
FilterCategory.belongsTo(Category);

const Subcategory = sequelize.define('subcategory', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nameuk: { type: DataTypes.STRING, allowNull: false },
  nameru: { type: DataTypes.STRING, allowNull: false },
});

Category.hasMany(Subcategory);
Subcategory.belongsTo(Category);


const Goods=sequelize.define('goods',{
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nameuk: { type: DataTypes.STRING, allowNull: false },
  nameru: { type: DataTypes.STRING, allowNull: false },
  descriptionuk:{type:DataTypes.TEXT,allowNull:false},
  descriptionru:{type:DataTypes.TEXT,allowNull:false},
  art: {type:DataTypes.STRING,allowNull:false},
  characteristicuk: { type:DataTypes.TEXT, allowNull: false },
  characteristicru: { type:DataTypes.TEXT, allowNull: false },
  video: {type: DataTypes.STRING, allowNull:true }
})

Brends.hasMany(Goods);
Goods.belongsTo(Brends);

Category.hasMany(Goods)
Goods.belongsTo(Category);

CountryMade.hasMany(Goods);
Goods.belongsTo(CountryMade);

Subcategory.hasMany(Goods);
Goods.belongsTo(Subcategory);

const Volume=sequelize.define('volume',{
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  volume: { type:DataTypes.STRING, allowNull:false },
  price: { type:DataTypes.FLOAT, allowNull:false },
  discount: { type:DataTypes.FLOAT, allowNull:false },
  priceWithDiscount: { type:DataTypes.FLOAT, allowNull:false },
});

Goods.hasMany(Volume);
Volume.belongsTo(Goods);

const Img=sequelize.define('img',{
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  img: { type:DataTypes.STRING, allowNull:false }
});

Volume.hasMany(Img);
Img.belongsTo(Volume);

const ProductCategoryFilter = sequelize.define('productCategoryFilter', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  valueuk: { type: DataTypes.STRING, allowNull: false },
  valueru: { type: DataTypes.STRING, allowNull: false },
});

FilterCategory.hasMany(ProductCategoryFilter);
ProductCategoryFilter.belongsTo(FilterCategory);

Goods.hasMany(ProductCategoryFilter);
ProductCategoryFilter.belongsTo(Goods);

module.exports = {
  Brends,
  CountryMade,
  Category,
  FilterCategory,
  Subcategory,
  Goods,
  Volume,
  Img,
  ProductCategoryFilter
};

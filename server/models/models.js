const { DataTypes } = require('sequelize'); // Імпортуємо DataTypes
const sequelize = require('../db'); // Імпортуємо ваш екземпляр sequelize

const Brends=sequelize.define('brend',{
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: {type:DataTypes.STRING,allowNull:false},
})

const Category=sequelize.define('categories',{
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nameua:{type:DataTypes.STRING,unique:true,allowNull:false},
  nameru:{type:DataTypes.STRING,unique:true,allowNull:false},
  svg:{type:DataTypes.STRING,allowNull:false},
  url:{type:DataTypes.STRING,allowNull:false,unique:true}
})

const CategoryTitle=sequelize.define('categoryTitle',{
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nameua:{type:DataTypes.STRING,unique:true,allowNull:false},
  nameru:{type:DataTypes.STRING,unique:true,allowNull:false},
})

const Subcategory=sequelize.define('subcategory',{
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nameua:{type:DataTypes.STRING,unique:true,allowNull:false},
  nameru:{type:DataTypes.STRING,unique:true,allowNull:false},
  url:{type:DataTypes.STRING,allowNull:false,unique:true}
})

Category.hasMany(CategoryTitle);
CategoryTitle.belongsTo(Category);

CategoryTitle.hasMany(Subcategory);
Subcategory.belongsTo(CategoryTitle);

module.exports = {
  Brends,
  Category,
  CategoryTitle,
  Subcategory
};

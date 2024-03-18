import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql', // Change the dialect if necessary
  host: 'localhost',
  // Other options if needed
});

// Initialize the model
let NRM_PRODUCTS = (sequelize: Sequelize) => {
  const attributes = {
    PRODUCTS_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "PRODUCTS_ID"
    },
    PRODUCT_CATEGORY_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PRODUCT_CATEGORY_ID",
      references: {
        key: "PRODUCT_CATEGORY_ID",
        model: "NRM_PRODUCT_CATEGORY_model"
      }
    },
    PRODUCT_NAME: {
      type: DataTypes.STRING(3000),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PRODUCT_NAME",
      unique: "NRM_PRODUCTS_U1"
    },
    IS_ACTIVE: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "IS_ACTIVE"
    },
    FILE: {
      type: longblob,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "FILE"
    }
  };
  const options = {
    tableName: "NRM_PRODUCTS",
    comment: "",
    indexes: [{
      name: "FK_PRODUCT_CATEGORY_ID",
      unique: false,
      type: "BTREE",
      fields: ["PRODUCT_CATEGORY_ID"]
    }]
  };
  const NrmProductsModel = sequelize.define("NRM_PRODUCTS_model", attributes, options);
  return NrmProductsModel;
}
export default NRM_PRODUCTS(sequelize)

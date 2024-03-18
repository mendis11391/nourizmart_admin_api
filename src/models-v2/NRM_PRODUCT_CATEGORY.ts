import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    PRODUCT_CATEGORY_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "PRODUCT_CATEGORY_ID"
    },
    PRODUCT_CATEGORY_NAME: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PRODUCT_CATEGORY_NAME",
      unique: "UNIQUE_CATEGORY_NAME"
    }
  };
  const options = {
    tableName: "NRM_PRODUCT_CATEGORY",
    comment: "",
    indexes: []
  };
  const NrmProductCategoryModel = sequelize.define("NRM_PRODUCT_CATEGORY_model", attributes, options);
  return NrmProductCategoryModel;
}
import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    PRODUCT_PRICE_LINK_HIS_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "PRODUCT_PRICE_LINK_HIS_ID"
    },
    PRODUCT_PRICE_LINK_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PRODUCT_PRICE_LINK_ID"
    },
    PRODUCT_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PRODUCT_ID"
    },
    PINCODE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PINCODE_ID"
    },
    PRICE: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PRICE"
    },
    CREATED_BY: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "CREATED_BY"
    },
    CREATED_DATE: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "CREATED_DATE"
    },
    UPDATED_BY: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UPDATED_BY"
    },
    UPDATED_DATE: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UPDATED_DATE"
    },
    is_Active: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "is_Active"
    }
  };
  const options = {
    tableName: "NRM_PRODUCT_PRICE_LINK_HIS",
    comment: "",
    indexes: [{
      name: "NRM_PRODUCT_PRICE_HIS_U1",
      unique: true,
      type: "BTREE",
      fields: ["PRODUCT_ID", "PINCODE_ID"]
    }]
  };
  const NrmProductPriceLinkHisModel = sequelize.define("NRM_PRODUCT_PRICE_LINK_HIS_model", attributes, options);
  return NrmProductPriceLinkHisModel;
}
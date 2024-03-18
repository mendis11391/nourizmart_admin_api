import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    WAREHOUSE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "WAREHOUSE_ID"
    },
    WAREHOUSE_NAME: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "WAREHOUSE_NAME",
      unique: "WAREHOUSE_NAME"
    },
    WAREHOUSE_PINCODE: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "WAREHOUSE_PINCODE"
    },
    WAREHOUSE_ADDRESS: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "WAREHOUSE_ADDRESS"
    },
    SORT_ORDER: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SORT_ORDER"
    }
  };
  const options = {
    tableName: "NRM_WAREHOUSE",
    comment: "",
    indexes: []
  };
  const NrmWarehouseModel = sequelize.define("NRM_WAREHOUSE_model", attributes, options);
  return NrmWarehouseModel;
}
import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    PRODUCT_UNIT_LINK_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "PRODUCT_UNIT_LINK_ID"
    },
    PRODUCT_CATEGORY_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PRODUCT_CATEGORY_ID"
    },
    UNIT_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UNIT_ID"
    }
  };
  const options = {
    tableName: "NRM_PRODUCT_UNIT_LINK",
    comment: "",
    indexes: [{
      name: "NRM_PRODUCT_UNIT_LINK_U1",
      unique: true,
      type: "BTREE",
      fields: ["PRODUCT_CATEGORY_ID", "UNIT_ID"]
    }]
  };
  const NrmProductUnitLinkModel = sequelize.define("NRM_PRODUCT_UNIT_LINK_model", attributes, options);
  return NrmProductUnitLinkModel;
}
import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    AREA_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "AREA_ID"
    },
    PINCODE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PINCODE_ID",
      references: {
        key: "PINCODE_ID",
        model: "NRM_PINCODE_model"
      }
    },
    AREA_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "AREA_NAME",
      unique: "UNIQUE_AREA_NAME"
    },
    SORT_ORDER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SORT_ORDER"
    },
    IS_ACTIVE: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "Y",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "IS_ACTIVE"
    }
  };
  const options = {
    tableName: "NRM_AREA",
    comment: "",
    indexes: [{
      name: "FK_PINCODE_ID",
      unique: false,
      type: "BTREE",
      fields: ["PINCODE_ID"]
    }]
  };
  const NrmAreaModel = sequelize.define("NRM_AREA_model", attributes, options);
  return NrmAreaModel;
}
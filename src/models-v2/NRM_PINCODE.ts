import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    PINCODE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "PINCODE_ID"
    },
    DISTRICT_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "DISTRICT_ID",
      references: {
        key: "DISTRICT_ID",
        model: "NRM_DISTRICT_model"
      }
    },
    PINCODE: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PINCODE",
      unique: "UNIQUE_PINCODE"
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
    tableName: "NRM_PINCODE",
    comment: "",
    indexes: [{
      name: "IND_NRM_PINCODE_DIS_ID",
      unique: false,
      type: "BTREE",
      fields: ["DISTRICT_ID"]
    }]
  };
  const NrmPincodeModel = sequelize.define("NRM_PINCODE_model", attributes, options);
  return NrmPincodeModel;
}
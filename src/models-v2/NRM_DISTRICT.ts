import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    DISTRICT_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "DISTRICT_ID"
    },
    STATE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "STATE_ID",
      references: {
        key: "STATE_ID",
        model: "NRM_STATE_model"
      }
    },
    DISTRICT_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "DISTRICT_NAME",
      unique: "UNIQUE_DISTRICT_NAME"
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
    tableName: "NRM_DISTRICT",
    comment: "",
    indexes: [{
      name: "IND_NRM_DISTRICT_ID",
      unique: false,
      type: "BTREE",
      fields: ["STATE_ID"]
    }]
  };
  const NrmDistrictModel = sequelize.define("NRM_DISTRICT_model", attributes, options);
  return NrmDistrictModel;
}
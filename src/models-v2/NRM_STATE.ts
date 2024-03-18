import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    STATE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "STATE_ID"
    },
    STATE_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "STATE_NAME",
      unique: "UNIQUE_STATE_NAME"
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
    tableName: "NRM_STATE",
    comment: "",
    indexes: []
  };
  const NrmStateModel = sequelize.define("NRM_STATE_model", attributes, options);
  return NrmStateModel;
}
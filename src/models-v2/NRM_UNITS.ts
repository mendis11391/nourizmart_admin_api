import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    UNIT_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "UNIT_ID"
    },
    UNIT_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UNIT_NAME",
      unique: "UNIQUE_UNIT_NAME"
    },
    UNIT_SYMBOL: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UNIT_SYMBOL",
      unique: "UNIQUE_UNIT_SYMBOL"
    }
  };
  const options = {
    tableName: "NRM_UNITS",
    comment: "",
    indexes: []
  };
  const NrmUnitsModel = sequelize.define("NRM_UNITS_model", attributes, options);
  return NrmUnitsModel;
}
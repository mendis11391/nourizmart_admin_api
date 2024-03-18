import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    group_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "group_id"
    },
    group_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "group_name"
    },
    group_code: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "group_code"
    }
  };
  const options = {
    tableName: "NRM_GROUP",
    comment: "",
    indexes: []
  };
  const NrmGroupModel = sequelize.define("NRM_GROUP_model", attributes, options);
  return NrmGroupModel;
}
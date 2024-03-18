import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    A: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "A"
    }
  };
  const options = {
    tableName: "TEST1",
    comment: "",
    indexes: []
  };
  const Test1Model = sequelize.define("TEST1_model", attributes, options);
  return Test1Model;
}
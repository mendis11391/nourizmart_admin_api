import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    NRM_DELIVERY_TYPE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "NRM_DELIVERY_TYPE_ID"
    },
    NRM_DELIVERY_TYPE_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "NRM_DELIVERY_TYPE_NAME"
    }
  };
  const options = {
    tableName: "NRM_DELIVERY_TYPE",
    comment: "",
    indexes: []
  };
  const NrmDeliveryTypeModel = sequelize.define("NRM_DELIVERY_TYPE_model", attributes, options);
  return NrmDeliveryTypeModel;
}
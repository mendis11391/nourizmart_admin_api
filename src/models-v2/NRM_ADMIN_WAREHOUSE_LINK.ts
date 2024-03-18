import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    ADMIN_WAREHOUSE_LINK_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "ADMIN_WAREHOUSE_LINK_ID"
    },
    ADMIN_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ADMIN_ID"
    },
    WAREHOUSE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "WAREHOUSE_ID",
      references: {
        key: "WAREHOUSE_ID",
        model: "NRM_WAREHOUSE_model"
      }
    }
  };
  const options = {
    tableName: "NRM_ADMIN_WAREHOUSE_LINK",
    comment: "",
    indexes: [{
      name: "ADMIN_WAREHOUSE_LINK_U1",
      unique: true,
      type: "BTREE",
      fields: ["ADMIN_ID", "WAREHOUSE_ID"]
    }, {
      name: "FK_NRM_ADMIN_WAREHOUSE_LINK2",
      unique: false,
      type: "BTREE",
      fields: ["WAREHOUSE_ID"]
    }]
  };
  const NrmAdminWarehouseLinkModel = sequelize.define("NRM_ADMIN_WAREHOUSE_LINK_model", attributes, options);
  return NrmAdminWarehouseLinkModel;
}
import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    USER_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "USER_ID"
    },
    FIRE_BASE_ID: {
      type: DataTypes.STRING(4000),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "FIRE_BASE_ID"
    },
    FIRST_NAME: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "FIRST_NAME"
    },
    LAST_NAME: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "LAST_NAME"
    },
    MOBILE: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "MOBILE",
      unique: "NRM_CUSTOMER_DETAILS_U1"
    },
    EMAIL: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "EMAIL"
    },
    HOUSE_NO: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "HOUSE_NO"
    },
    STREET: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "STREET"
    },
    AREA_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "AREA_ID",
      references: {
        key: "AREA_ID",
        model: "NRM_AREA_model"
      }
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
    LANDMARK: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "LANDMARK"
    },
    IS_ACTIVE: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "Y",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "IS_ACTIVE"
    },
    CREATED_BY: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "CREATED_BY"
    },
    CREATED_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "CREATED_DATE"
    },
    UPDATED_BY: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UPDATED_BY"
    },
    UPDATED_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UPDATED_DATE"
    }
  };
  const options = {
    tableName: "NRM_CUSTOMER_DETAILS",
    comment: "",
    indexes: [{
      name: "FK_USER_DISTRICT_ID",
      unique: false,
      type: "BTREE",
      fields: ["DISTRICT_ID"]
    }, {
      name: "FK_USER_STATE_ID",
      unique: false,
      type: "BTREE",
      fields: ["STATE_ID"]
    }, {
      name: "FK_USER_PINCODE_ID",
      unique: false,
      type: "BTREE",
      fields: ["PINCODE_ID"]
    }, {
      name: "FK_USER_AREA_ID",
      unique: false,
      type: "BTREE",
      fields: ["AREA_ID"]
    }]
  };
  const NrmCustomerDetailsModel = sequelize.define("NRM_CUSTOMER_DETAILS_model", attributes, options);
  return NrmCustomerDetailsModel;
}
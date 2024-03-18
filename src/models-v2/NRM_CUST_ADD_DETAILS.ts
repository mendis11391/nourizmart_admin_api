import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    NRM_CUST_ADD_DETAILS_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "NRM_CUST_ADD_DETAILS_ID"
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_id",
      references: {
        key: "USER_ID",
        model: "NRM_CUSTOMER_DETAILS_model"
      }
    },
    HOUSE_NO: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "HOUSE_NO"
    },
    STREET: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "STREET"
    },
    AREA_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
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
      allowNull: true,
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
      allowNull: true,
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
      allowNull: true,
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
      type: DataTypes.STRING(4000),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "LANDMARK"
    },
    is_active: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "is_active"
    },
    is_default: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "is_default"
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
    tableName: "NRM_CUST_ADD_DETAILS",
    comment: "",
    indexes: [{
      name: "FK_CUST_ADD_USER_ID",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }, {
      name: "FK_CUST_ADD_DISTRICT_ID",
      unique: false,
      type: "BTREE",
      fields: ["DISTRICT_ID"]
    }, {
      name: "FK_CUST_ADD_STATE_ID",
      unique: false,
      type: "BTREE",
      fields: ["STATE_ID"]
    }, {
      name: "FK_CUST_ADD_PINCODE_ID",
      unique: false,
      type: "BTREE",
      fields: ["PINCODE_ID"]
    }, {
      name: "FK_CUST_ADD_AREA_ID",
      unique: false,
      type: "BTREE",
      fields: ["AREA_ID"]
    }]
  };
  const NrmCustAddDetailsModel = sequelize.define("NRM_CUST_ADD_DETAILS_model", attributes, options);
  return NrmCustAddDetailsModel;
}
import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { NRM_AREA, NRM_AREAId } from './NRM_AREA';
import type { NRM_CUSTOMER_DETAILS, NRM_CUSTOMER_DETAILSId } from './NRM_CUSTOMER_DETAILS';
import type { NRM_DISTRICT, NRM_DISTRICTId } from './NRM_DISTRICT';
import type { NRM_PINCODE, NRM_PINCODEId } from './NRM_PINCODE';
import type { NRM_STATE, NRM_STATEId } from './NRM_STATE';

export interface NRM_CUST_ADD_DETAILSAttributes {
  NRM_CUST_ADD_DETAILS_ID: number;
  user_id?: number;
  HOUSE_NO?: string;
  STREET?: string;
  AREA_ID?: number;
  DISTRICT_ID?: number;
  STATE_ID?: number;
  PINCODE_ID?: number;
  LANDMARK?: string;
  is_active?: string;
  is_default?: string;
  CREATED_BY: string;
  CREATED_DATE: Date;
  UPDATED_BY: string;
  UPDATED_DATE: Date;
}

export type NRM_CUST_ADD_DETAILSPk = "NRM_CUST_ADD_DETAILS_ID";
export type NRM_CUST_ADD_DETAILSId = NRM_CUST_ADD_DETAILS[NRM_CUST_ADD_DETAILSPk];
export type NRM_CUST_ADD_DETAILSOptionalAttributes = "NRM_CUST_ADD_DETAILS_ID" | "user_id" | "HOUSE_NO" | "STREET" | "AREA_ID" | "DISTRICT_ID" | "STATE_ID" | "PINCODE_ID" | "LANDMARK" | "is_active" | "is_default" | "CREATED_DATE" | "UPDATED_DATE";
export type NRM_CUST_ADD_DETAILSCreationAttributes = Optional<NRM_CUST_ADD_DETAILSAttributes, NRM_CUST_ADD_DETAILSOptionalAttributes>;

export class NRM_CUST_ADD_DETAILS extends Model<NRM_CUST_ADD_DETAILSAttributes, NRM_CUST_ADD_DETAILSCreationAttributes> implements NRM_CUST_ADD_DETAILSAttributes {
  NRM_CUST_ADD_DETAILS_ID!: number;
  user_id?: number;
  HOUSE_NO?: string;
  STREET?: string;
  AREA_ID?: number;
  DISTRICT_ID?: number;
  STATE_ID?: number;
  PINCODE_ID?: number;
  LANDMARK?: string;
  is_active?: string;
  is_default?: string;
  CREATED_BY!: string;
  CREATED_DATE!: Date;
  UPDATED_BY!: string;
  UPDATED_DATE!: Date;

  // NRM_CUST_ADD_DETAILS belongsTo NRM_AREA via AREA_ID
  AREA!: NRM_AREA;
  getAREA!: Sequelize.BelongsToGetAssociationMixin<NRM_AREA>;
  setAREA!: Sequelize.BelongsToSetAssociationMixin<NRM_AREA, NRM_AREAId>;
  createAREA!: Sequelize.BelongsToCreateAssociationMixin<NRM_AREA>;
  // NRM_CUST_ADD_DETAILS belongsTo NRM_CUSTOMER_DETAILS via user_id
  user!: NRM_CUSTOMER_DETAILS;
  getUser!: Sequelize.BelongsToGetAssociationMixin<NRM_CUSTOMER_DETAILS>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<NRM_CUSTOMER_DETAILS, NRM_CUSTOMER_DETAILSId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<NRM_CUSTOMER_DETAILS>;
  // NRM_CUST_ADD_DETAILS belongsTo NRM_DISTRICT via DISTRICT_ID
  DISTRICT!: NRM_DISTRICT;
  getDISTRICT!: Sequelize.BelongsToGetAssociationMixin<NRM_DISTRICT>;
  setDISTRICT!: Sequelize.BelongsToSetAssociationMixin<NRM_DISTRICT, NRM_DISTRICTId>;
  createDISTRICT!: Sequelize.BelongsToCreateAssociationMixin<NRM_DISTRICT>;
  // NRM_CUST_ADD_DETAILS belongsTo NRM_PINCODE via PINCODE_ID
  PINCODE!: NRM_PINCODE;
  getPINCODE!: Sequelize.BelongsToGetAssociationMixin<NRM_PINCODE>;
  setPINCODE!: Sequelize.BelongsToSetAssociationMixin<NRM_PINCODE, NRM_PINCODEId>;
  createPINCODE!: Sequelize.BelongsToCreateAssociationMixin<NRM_PINCODE>;
  // NRM_CUST_ADD_DETAILS belongsTo NRM_STATE via STATE_ID
  STATE!: NRM_STATE;
  getSTATE!: Sequelize.BelongsToGetAssociationMixin<NRM_STATE>;
  setSTATE!: Sequelize.BelongsToSetAssociationMixin<NRM_STATE, NRM_STATEId>;
  createSTATE!: Sequelize.BelongsToCreateAssociationMixin<NRM_STATE>;

  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_CUST_ADD_DETAILS {
    return NRM_CUST_ADD_DETAILS.init({
    NRM_CUST_ADD_DETAILS_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'NRM_CUSTOMER_DETAILS',
        key: 'USER_ID'
      }
    },
    HOUSE_NO: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    STREET: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    AREA_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'NRM_AREA',
        key: 'AREA_ID'
      }
    },
    DISTRICT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'NRM_DISTRICT',
        key: 'DISTRICT_ID'
      }
    },
    STATE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'NRM_STATE',
        key: 'STATE_ID'
      }
    },
    PINCODE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'NRM_PINCODE',
        key: 'PINCODE_ID'
      }
    },
    LANDMARK: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    is_active: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    is_default: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CREATED_BY: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    CREATED_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    UPDATED_BY: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    UPDATED_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'NRM_CUST_ADD_DETAILS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NRM_CUST_ADD_DETAILS_ID" },
        ]
      },
      {
        name: "FK_CUST_ADD_USER_ID",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FK_CUST_ADD_DISTRICT_ID",
        using: "BTREE",
        fields: [
          { name: "DISTRICT_ID" },
        ]
      },
      {
        name: "FK_CUST_ADD_STATE_ID",
        using: "BTREE",
        fields: [
          { name: "STATE_ID" },
        ]
      },
      {
        name: "FK_CUST_ADD_PINCODE_ID",
        using: "BTREE",
        fields: [
          { name: "PINCODE_ID" },
        ]
      },
      {
        name: "FK_CUST_ADD_AREA_ID",
        using: "BTREE",
        fields: [
          { name: "AREA_ID" },
        ]
      },
    ]
  });
  }
}

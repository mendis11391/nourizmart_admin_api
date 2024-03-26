import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { NRM_CUST_ADD_DETAILS, NRM_CUST_ADD_DETAILSId } from './NRM_CUST_ADD_DETAILS';
import type { NRM_PINCODE, NRM_PINCODEId } from './NRM_PINCODE';
import type { NRM_STATE, NRM_STATEId } from './NRM_STATE';

export interface NRM_DISTRICTAttributes {
  DISTRICT_ID: number;
  STATE_ID: number;
  DISTRICT_NAME: string;
  SORT_ORDER: number;
  IS_ACTIVE: string;
}

export type NRM_DISTRICTPk = "DISTRICT_ID";
export type NRM_DISTRICTId = NRM_DISTRICT[NRM_DISTRICTPk];
export type NRM_DISTRICTOptionalAttributes = "DISTRICT_ID" | "IS_ACTIVE";
export type NRM_DISTRICTCreationAttributes = Optional<NRM_DISTRICTAttributes, NRM_DISTRICTOptionalAttributes>;

export class NRM_DISTRICT extends Model<NRM_DISTRICTAttributes, NRM_DISTRICTCreationAttributes> implements NRM_DISTRICTAttributes {
  DISTRICT_ID!: number;
  STATE_ID!: number;
  DISTRICT_NAME!: string;
  SORT_ORDER!: number;
  IS_ACTIVE!: string;

  // NRM_DISTRICT hasMany NRM_CUST_ADD_DETAILS via DISTRICT_ID
  NRM_CUST_ADD_DETAILs!: NRM_CUST_ADD_DETAILS[];
  getNRM_CUST_ADD_DETAILs!: Sequelize.HasManyGetAssociationsMixin<NRM_CUST_ADD_DETAILS>;
  setNRM_CUST_ADD_DETAILs!: Sequelize.HasManySetAssociationsMixin<NRM_CUST_ADD_DETAILS, NRM_CUST_ADD_DETAILSId>;
  addNRM_CUST_ADD_DETAIL!: Sequelize.HasManyAddAssociationMixin<NRM_CUST_ADD_DETAILS, NRM_CUST_ADD_DETAILSId>;
  addNRM_CUST_ADD_DETAILs!: Sequelize.HasManyAddAssociationsMixin<NRM_CUST_ADD_DETAILS, NRM_CUST_ADD_DETAILSId>;
  createNRM_CUST_ADD_DETAIL!: Sequelize.HasManyCreateAssociationMixin<NRM_CUST_ADD_DETAILS>;
  removeNRM_CUST_ADD_DETAIL!: Sequelize.HasManyRemoveAssociationMixin<NRM_CUST_ADD_DETAILS, NRM_CUST_ADD_DETAILSId>;
  removeNRM_CUST_ADD_DETAILs!: Sequelize.HasManyRemoveAssociationsMixin<NRM_CUST_ADD_DETAILS, NRM_CUST_ADD_DETAILSId>;
  hasNRM_CUST_ADD_DETAIL!: Sequelize.HasManyHasAssociationMixin<NRM_CUST_ADD_DETAILS, NRM_CUST_ADD_DETAILSId>;
  hasNRM_CUST_ADD_DETAILs!: Sequelize.HasManyHasAssociationsMixin<NRM_CUST_ADD_DETAILS, NRM_CUST_ADD_DETAILSId>;
  countNRM_CUST_ADD_DETAILs!: Sequelize.HasManyCountAssociationsMixin;
  // NRM_DISTRICT hasMany NRM_PINCODE via DISTRICT_ID
  NRM_PINCODEs!: NRM_PINCODE[];
  getNRM_PINCODEs!: Sequelize.HasManyGetAssociationsMixin<NRM_PINCODE>;
  setNRM_PINCODEs!: Sequelize.HasManySetAssociationsMixin<NRM_PINCODE, NRM_PINCODEId>;
  addNRM_PINCODE!: Sequelize.HasManyAddAssociationMixin<NRM_PINCODE, NRM_PINCODEId>;
  addNRM_PINCODEs!: Sequelize.HasManyAddAssociationsMixin<NRM_PINCODE, NRM_PINCODEId>;
  createNRM_PINCODE!: Sequelize.HasManyCreateAssociationMixin<NRM_PINCODE>;
  removeNRM_PINCODE!: Sequelize.HasManyRemoveAssociationMixin<NRM_PINCODE, NRM_PINCODEId>;
  removeNRM_PINCODEs!: Sequelize.HasManyRemoveAssociationsMixin<NRM_PINCODE, NRM_PINCODEId>;
  hasNRM_PINCODE!: Sequelize.HasManyHasAssociationMixin<NRM_PINCODE, NRM_PINCODEId>;
  hasNRM_PINCODEs!: Sequelize.HasManyHasAssociationsMixin<NRM_PINCODE, NRM_PINCODEId>;
  countNRM_PINCODEs!: Sequelize.HasManyCountAssociationsMixin;
  // NRM_DISTRICT belongsTo NRM_STATE via STATE_ID
  STATE!: NRM_STATE;
  getSTATE!: Sequelize.BelongsToGetAssociationMixin<NRM_STATE>;
  setSTATE!: Sequelize.BelongsToSetAssociationMixin<NRM_STATE, NRM_STATEId>;
  createSTATE!: Sequelize.BelongsToCreateAssociationMixin<NRM_STATE>;

  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_DISTRICT {
    return NRM_DISTRICT.init({
    DISTRICT_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    STATE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'NRM_STATE',
        key: 'STATE_ID'
      }
    },
    DISTRICT_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "UNIQUE_DISTRICT_NAME"
    },
    SORT_ORDER: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IS_ACTIVE: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "Y"
    }
  }, {
    sequelize,
    tableName: 'NRM_DISTRICT',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DISTRICT_ID" },
        ]
      },
      {
        name: "UNIQUE_DISTRICT_NAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DISTRICT_NAME" },
        ]
      },
      {
        name: "IND_NRM_DISTRICT_ID",
        using: "BTREE",
        fields: [
          { name: "STATE_ID" },
        ]
      },
    ]
  });
  }
}

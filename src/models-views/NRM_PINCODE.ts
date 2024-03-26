import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { NRM_AREA, NRM_AREAId } from './NRM_AREA';
import type { NRM_CUST_ADD_DETAILS, NRM_CUST_ADD_DETAILSId } from './NRM_CUST_ADD_DETAILS';
import type { NRM_DISTRICT, NRM_DISTRICTId } from './NRM_DISTRICT';

export interface NRM_PINCODEAttributes {
  PINCODE_ID: number;
  DISTRICT_ID: number;
  PINCODE: string;
  SORT_ORDER: number;
  IS_ACTIVE: string;
}

export type NRM_PINCODEPk = "PINCODE_ID";
export type NRM_PINCODEId = NRM_PINCODE[NRM_PINCODEPk];
export type NRM_PINCODEOptionalAttributes = "PINCODE_ID" | "IS_ACTIVE";
export type NRM_PINCODECreationAttributes = Optional<NRM_PINCODEAttributes, NRM_PINCODEOptionalAttributes>;

export class NRM_PINCODE extends Model<NRM_PINCODEAttributes, NRM_PINCODECreationAttributes> implements NRM_PINCODEAttributes {
  PINCODE_ID!: number;
  DISTRICT_ID!: number;
  PINCODE!: string;
  SORT_ORDER!: number;
  IS_ACTIVE!: string;

  // NRM_PINCODE belongsTo NRM_DISTRICT via DISTRICT_ID
  DISTRICT!: NRM_DISTRICT;
  getDISTRICT!: Sequelize.BelongsToGetAssociationMixin<NRM_DISTRICT>;
  setDISTRICT!: Sequelize.BelongsToSetAssociationMixin<NRM_DISTRICT, NRM_DISTRICTId>;
  createDISTRICT!: Sequelize.BelongsToCreateAssociationMixin<NRM_DISTRICT>;
  // NRM_PINCODE hasMany NRM_AREA via PINCODE_ID
  NRM_AREAs!: NRM_AREA[];
  getNRM_AREAs!: Sequelize.HasManyGetAssociationsMixin<NRM_AREA>;
  setNRM_AREAs!: Sequelize.HasManySetAssociationsMixin<NRM_AREA, NRM_AREAId>;
  addNRM_AREA!: Sequelize.HasManyAddAssociationMixin<NRM_AREA, NRM_AREAId>;
  addNRM_AREAs!: Sequelize.HasManyAddAssociationsMixin<NRM_AREA, NRM_AREAId>;
  createNRM_AREA!: Sequelize.HasManyCreateAssociationMixin<NRM_AREA>;
  removeNRM_AREA!: Sequelize.HasManyRemoveAssociationMixin<NRM_AREA, NRM_AREAId>;
  removeNRM_AREAs!: Sequelize.HasManyRemoveAssociationsMixin<NRM_AREA, NRM_AREAId>;
  hasNRM_AREA!: Sequelize.HasManyHasAssociationMixin<NRM_AREA, NRM_AREAId>;
  hasNRM_AREAs!: Sequelize.HasManyHasAssociationsMixin<NRM_AREA, NRM_AREAId>;
  countNRM_AREAs!: Sequelize.HasManyCountAssociationsMixin;
  // NRM_PINCODE hasMany NRM_CUST_ADD_DETAILS via PINCODE_ID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_PINCODE {
    return NRM_PINCODE.init({
    PINCODE_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DISTRICT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'NRM_DISTRICT',
        key: 'DISTRICT_ID'
      }
    },
    PINCODE: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "UNIQUE_PINCODE"
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
    tableName: 'NRM_PINCODE',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PINCODE_ID" },
        ]
      },
      {
        name: "UNIQUE_PINCODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PINCODE" },
        ]
      },
      {
        name: "IND_NRM_PINCODE_DIS_ID",
        using: "BTREE",
        fields: [
          { name: "DISTRICT_ID" },
        ]
      },
    ]
  });
  }
}

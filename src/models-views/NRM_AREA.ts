import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { NRM_CUST_ADD_DETAILS, NRM_CUST_ADD_DETAILSId } from './NRM_CUST_ADD_DETAILS';
import type { NRM_PINCODE, NRM_PINCODEId } from './NRM_PINCODE';

export interface NRM_AREAAttributes {
  AREA_ID: number;
  PINCODE_ID: number;
  AREA_NAME: string;
  SORT_ORDER: number;
  IS_ACTIVE: string;
}

export type NRM_AREAPk = "AREA_ID";
export type NRM_AREAId = NRM_AREA[NRM_AREAPk];
export type NRM_AREAOptionalAttributes = "AREA_ID" | "IS_ACTIVE";
export type NRM_AREACreationAttributes = Optional<NRM_AREAAttributes, NRM_AREAOptionalAttributes>;

export class NRM_AREA extends Model<NRM_AREAAttributes, NRM_AREACreationAttributes> implements NRM_AREAAttributes {
  AREA_ID!: number;
  PINCODE_ID!: number;
  AREA_NAME!: string;
  SORT_ORDER!: number;
  IS_ACTIVE!: string;

  // NRM_AREA hasMany NRM_CUST_ADD_DETAILS via AREA_ID
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
  // NRM_AREA belongsTo NRM_PINCODE via PINCODE_ID
  PINCODE!: NRM_PINCODE;
  getPINCODE!: Sequelize.BelongsToGetAssociationMixin<NRM_PINCODE>;
  setPINCODE!: Sequelize.BelongsToSetAssociationMixin<NRM_PINCODE, NRM_PINCODEId>;
  createPINCODE!: Sequelize.BelongsToCreateAssociationMixin<NRM_PINCODE>;

  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_AREA {
    return NRM_AREA.init({
    AREA_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PINCODE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'NRM_PINCODE',
        key: 'PINCODE_ID'
      }
    },
    AREA_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "UNIQUE_AREA_NAME"
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
    tableName: 'NRM_AREA',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AREA_ID" },
        ]
      },
      {
        name: "UNIQUE_AREA_NAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AREA_NAME" },
        ]
      },
      {
        name: "FK_PINCODE_ID",
        using: "BTREE",
        fields: [
          { name: "PINCODE_ID" },
        ]
      },
    ]
  });
  }
}

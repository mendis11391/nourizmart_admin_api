import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { NRM_CUST_ADD_DETAILS, NRM_CUST_ADD_DETAILSId } from './NRM_CUST_ADD_DETAILS';
import type { NRM_DISTRICT, NRM_DISTRICTId } from './NRM_DISTRICT';

export interface NRM_STATEAttributes {
  STATE_ID: number;
  STATE_NAME: string;
  SORT_ORDER: number;
  IS_ACTIVE: string;
}

export type NRM_STATEPk = "STATE_ID";
export type NRM_STATEId = NRM_STATE[NRM_STATEPk];
export type NRM_STATEOptionalAttributes = "STATE_ID" | "IS_ACTIVE";
export type NRM_STATECreationAttributes = Optional<NRM_STATEAttributes, NRM_STATEOptionalAttributes>;

export class NRM_STATE extends Model<NRM_STATEAttributes, NRM_STATECreationAttributes> implements NRM_STATEAttributes {
  STATE_ID!: number;
  STATE_NAME!: string;
  SORT_ORDER!: number;
  IS_ACTIVE!: string;

  // NRM_STATE hasMany NRM_CUST_ADD_DETAILS via STATE_ID
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
  // NRM_STATE hasMany NRM_DISTRICT via STATE_ID
  NRM_DISTRICTs!: NRM_DISTRICT[];
  getNRM_DISTRICTs!: Sequelize.HasManyGetAssociationsMixin<NRM_DISTRICT>;
  setNRM_DISTRICTs!: Sequelize.HasManySetAssociationsMixin<NRM_DISTRICT, NRM_DISTRICTId>;
  addNRM_DISTRICT!: Sequelize.HasManyAddAssociationMixin<NRM_DISTRICT, NRM_DISTRICTId>;
  addNRM_DISTRICTs!: Sequelize.HasManyAddAssociationsMixin<NRM_DISTRICT, NRM_DISTRICTId>;
  createNRM_DISTRICT!: Sequelize.HasManyCreateAssociationMixin<NRM_DISTRICT>;
  removeNRM_DISTRICT!: Sequelize.HasManyRemoveAssociationMixin<NRM_DISTRICT, NRM_DISTRICTId>;
  removeNRM_DISTRICTs!: Sequelize.HasManyRemoveAssociationsMixin<NRM_DISTRICT, NRM_DISTRICTId>;
  hasNRM_DISTRICT!: Sequelize.HasManyHasAssociationMixin<NRM_DISTRICT, NRM_DISTRICTId>;
  hasNRM_DISTRICTs!: Sequelize.HasManyHasAssociationsMixin<NRM_DISTRICT, NRM_DISTRICTId>;
  countNRM_DISTRICTs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_STATE {
    return NRM_STATE.init({
    STATE_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    STATE_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "UNIQUE_STATE_NAME"
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
    tableName: 'NRM_STATE',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "STATE_ID" },
        ]
      },
      {
        name: "UNIQUE_STATE_NAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "STATE_NAME" },
        ]
      },
    ]
  });
  }
}

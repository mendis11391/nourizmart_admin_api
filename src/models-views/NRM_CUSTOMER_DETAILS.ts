import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { NRM_CUST_ADD_DETAILS, NRM_CUST_ADD_DETAILSId } from './NRM_CUST_ADD_DETAILS';

export interface NRM_CUSTOMER_DETAILSAttributes {
  USER_ID: number;
  FIRE_BASE_ID: string;
  FIRST_NAME: string;
  LAST_NAME?: string;
  MOBILE?: string;
  EMAIL?: string;
  IS_ACTIVE: string;
  CREATED_BY: string;
  CREATED_DATE: Date;
  UPDATED_BY: string;
  UPDATED_DATE: Date;
}

export type NRM_CUSTOMER_DETAILSPk = "USER_ID";
export type NRM_CUSTOMER_DETAILSId = NRM_CUSTOMER_DETAILS[NRM_CUSTOMER_DETAILSPk];
export type NRM_CUSTOMER_DETAILSOptionalAttributes = "USER_ID" | "LAST_NAME" | "MOBILE" | "EMAIL" | "IS_ACTIVE" | "CREATED_DATE" | "UPDATED_DATE";
export type NRM_CUSTOMER_DETAILSCreationAttributes = Optional<NRM_CUSTOMER_DETAILSAttributes, NRM_CUSTOMER_DETAILSOptionalAttributes>;

export class NRM_CUSTOMER_DETAILS extends Model<NRM_CUSTOMER_DETAILSAttributes, NRM_CUSTOMER_DETAILSCreationAttributes> implements NRM_CUSTOMER_DETAILSAttributes {
  USER_ID!: number;
  FIRE_BASE_ID!: string;
  FIRST_NAME!: string;
  LAST_NAME?: string;
  MOBILE?: string;
  EMAIL?: string;
  IS_ACTIVE!: string;
  CREATED_BY!: string;
  CREATED_DATE!: Date;
  UPDATED_BY!: string;
  UPDATED_DATE!: Date;

  // NRM_CUSTOMER_DETAILS hasMany NRM_CUST_ADD_DETAILS via user_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_CUSTOMER_DETAILS {
    return NRM_CUSTOMER_DETAILS.init({
    USER_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FIRE_BASE_ID: {
      type: DataTypes.STRING(4000),
      allowNull: false
    },
    FIRST_NAME: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    LAST_NAME: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    MOBILE: {
      type: DataTypes.STRING(11),
      allowNull: true,
      unique: "NRM_CUSTOMER_DETAILS_U1"
    },
    EMAIL: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    IS_ACTIVE: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "Y"
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
    tableName: 'NRM_CUSTOMER_DETAILS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
      {
        name: "NRM_CUSTOMER_DETAILS_U1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MOBILE" },
        ]
      },
    ]
  });
  }
}

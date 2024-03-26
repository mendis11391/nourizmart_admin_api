import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { NRM_GROUP, NRM_GROUPId } from './NRM_GROUP';

export interface NRM_ADMIN_DETAILSAttributes {
  admin_id: number;
  user_name: string;
  password: string;
  mobile: number;
  first_name: string;
  last_name?: string;
  GROUP_ID: number;
  is_active: string;
  CREATED_BY: string;
  CREATED_DATE: Date;
  UPDATED_BY?: string;
  UPDATED_DATE: Date;
}

export type NRM_ADMIN_DETAILSPk = "admin_id";
export type NRM_ADMIN_DETAILSId = NRM_ADMIN_DETAILS[NRM_ADMIN_DETAILSPk];
export type NRM_ADMIN_DETAILSOptionalAttributes = "admin_id" | "last_name" | "is_active" | "CREATED_DATE" | "UPDATED_BY" | "UPDATED_DATE";
export type NRM_ADMIN_DETAILSCreationAttributes = Optional<NRM_ADMIN_DETAILSAttributes, NRM_ADMIN_DETAILSOptionalAttributes>;

export class NRM_ADMIN_DETAILS extends Model<NRM_ADMIN_DETAILSAttributes, NRM_ADMIN_DETAILSCreationAttributes> implements NRM_ADMIN_DETAILSAttributes {
  admin_id!: number;
  user_name!: string;
  password!: string;
  mobile!: number;
  first_name!: string;
  last_name?: string;
  GROUP_ID!: number;
  is_active!: string;
  CREATED_BY!: string;
  CREATED_DATE!: Date;
  UPDATED_BY?: string;
  UPDATED_DATE!: Date;

  // NRM_ADMIN_DETAILS belongsTo NRM_GROUP via GROUP_ID
  GROUP!: NRM_GROUP;
  getGROUP!: Sequelize.BelongsToGetAssociationMixin<NRM_GROUP>;
  setGROUP!: Sequelize.BelongsToSetAssociationMixin<NRM_GROUP, NRM_GROUPId>;
  createGROUP!: Sequelize.BelongsToCreateAssociationMixin<NRM_GROUP>;

  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_ADMIN_DETAILS {
    return NRM_ADMIN_DETAILS.init({
    admin_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "UC_ADMIN_USER_NAME"
    },
    password: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    mobile: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'NRM_GROUP',
        key: 'group_id'
      }
    },
    is_active: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "Y"
    },
    CREATED_BY: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    CREATED_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    UPDATED_BY: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    UPDATED_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'NRM_ADMIN_DETAILS',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "admin_id" },
        ]
      },
      {
        name: "UC_ADMIN_USER_NAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_name" },
        ]
      },
      {
        name: "FK_ADMIN_GROUP_ID",
        using: "BTREE",
        fields: [
          { name: "GROUP_ID" },
        ]
      },
    ]
  });
  }
}

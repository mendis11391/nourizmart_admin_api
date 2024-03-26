import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { NRM_ADMIN_DETAILS, NRM_ADMIN_DETAILSId } from './NRM_ADMIN_DETAILS';

export interface NRM_GROUPAttributes {
  group_id: number;
  group_name: string;
  group_code: string;
}

export type NRM_GROUPPk = "group_id";
export type NRM_GROUPId = NRM_GROUP[NRM_GROUPPk];
export type NRM_GROUPOptionalAttributes = "group_id";
export type NRM_GROUPCreationAttributes = Optional<NRM_GROUPAttributes, NRM_GROUPOptionalAttributes>;

export class NRM_GROUP extends Model<NRM_GROUPAttributes, NRM_GROUPCreationAttributes> implements NRM_GROUPAttributes {
  group_id!: number;
  group_name!: string;
  group_code!: string;

  // NRM_GROUP hasMany NRM_ADMIN_DETAILS via GROUP_ID
  NRM_ADMIN_DETAILs!: NRM_ADMIN_DETAILS[];
  getNRM_ADMIN_DETAILs!: Sequelize.HasManyGetAssociationsMixin<NRM_ADMIN_DETAILS>;
  setNRM_ADMIN_DETAILs!: Sequelize.HasManySetAssociationsMixin<NRM_ADMIN_DETAILS, NRM_ADMIN_DETAILSId>;
  addNRM_ADMIN_DETAIL!: Sequelize.HasManyAddAssociationMixin<NRM_ADMIN_DETAILS, NRM_ADMIN_DETAILSId>;
  addNRM_ADMIN_DETAILs!: Sequelize.HasManyAddAssociationsMixin<NRM_ADMIN_DETAILS, NRM_ADMIN_DETAILSId>;
  createNRM_ADMIN_DETAIL!: Sequelize.HasManyCreateAssociationMixin<NRM_ADMIN_DETAILS>;
  removeNRM_ADMIN_DETAIL!: Sequelize.HasManyRemoveAssociationMixin<NRM_ADMIN_DETAILS, NRM_ADMIN_DETAILSId>;
  removeNRM_ADMIN_DETAILs!: Sequelize.HasManyRemoveAssociationsMixin<NRM_ADMIN_DETAILS, NRM_ADMIN_DETAILSId>;
  hasNRM_ADMIN_DETAIL!: Sequelize.HasManyHasAssociationMixin<NRM_ADMIN_DETAILS, NRM_ADMIN_DETAILSId>;
  hasNRM_ADMIN_DETAILs!: Sequelize.HasManyHasAssociationsMixin<NRM_ADMIN_DETAILS, NRM_ADMIN_DETAILSId>;
  countNRM_ADMIN_DETAILs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_GROUP {
    return NRM_GROUP.init({
    group_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    group_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    group_code: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'NRM_GROUP',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
    ]
  });
  }
}

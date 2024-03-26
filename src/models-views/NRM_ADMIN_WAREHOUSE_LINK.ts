import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { NRM_WAREHOUSE, NRM_WAREHOUSEId } from './NRM_WAREHOUSE';

export interface NRM_ADMIN_WAREHOUSE_LINKAttributes {
  ADMIN_WAREHOUSE_LINK_ID: number;
  ADMIN_ID?: number;
  WAREHOUSE_ID?: number;
}

export type NRM_ADMIN_WAREHOUSE_LINKPk = "ADMIN_WAREHOUSE_LINK_ID";
export type NRM_ADMIN_WAREHOUSE_LINKId = NRM_ADMIN_WAREHOUSE_LINK[NRM_ADMIN_WAREHOUSE_LINKPk];
export type NRM_ADMIN_WAREHOUSE_LINKOptionalAttributes = "ADMIN_WAREHOUSE_LINK_ID" | "ADMIN_ID" | "WAREHOUSE_ID";
export type NRM_ADMIN_WAREHOUSE_LINKCreationAttributes = Optional<NRM_ADMIN_WAREHOUSE_LINKAttributes, NRM_ADMIN_WAREHOUSE_LINKOptionalAttributes>;

export class NRM_ADMIN_WAREHOUSE_LINK extends Model<NRM_ADMIN_WAREHOUSE_LINKAttributes, NRM_ADMIN_WAREHOUSE_LINKCreationAttributes> implements NRM_ADMIN_WAREHOUSE_LINKAttributes {
  ADMIN_WAREHOUSE_LINK_ID!: number;
  ADMIN_ID?: number;
  WAREHOUSE_ID?: number;

  // NRM_ADMIN_WAREHOUSE_LINK belongsTo NRM_WAREHOUSE via WAREHOUSE_ID
  WAREHOUSE!: NRM_WAREHOUSE;
  getWAREHOUSE!: Sequelize.BelongsToGetAssociationMixin<NRM_WAREHOUSE>;
  setWAREHOUSE!: Sequelize.BelongsToSetAssociationMixin<NRM_WAREHOUSE, NRM_WAREHOUSEId>;
  createWAREHOUSE!: Sequelize.BelongsToCreateAssociationMixin<NRM_WAREHOUSE>;

  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_ADMIN_WAREHOUSE_LINK {
    return NRM_ADMIN_WAREHOUSE_LINK.init({
    ADMIN_WAREHOUSE_LINK_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ADMIN_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WAREHOUSE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'NRM_WAREHOUSE',
        key: 'WAREHOUSE_ID'
      }
    }
  }, {
    sequelize,
    tableName: 'NRM_ADMIN_WAREHOUSE_LINK',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ADMIN_WAREHOUSE_LINK_ID" },
        ]
      },
      {
        name: "ADMIN_WAREHOUSE_LINK_U1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ADMIN_ID" },
          { name: "WAREHOUSE_ID" },
        ]
      },
      {
        name: "FK_NRM_ADMIN_WAREHOUSE_LINK2",
        using: "BTREE",
        fields: [
          { name: "WAREHOUSE_ID" },
        ]
      },
    ]
  });
  }
}

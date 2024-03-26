import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { NRM_ADMIN_WAREHOUSE_LINK, NRM_ADMIN_WAREHOUSE_LINKId } from './NRM_ADMIN_WAREHOUSE_LINK';

export interface NRM_WAREHOUSEAttributes {
  WAREHOUSE_ID: number;
  WAREHOUSE_NAME?: string;
  WAREHOUSE_PINCODE?: string;
  WAREHOUSE_ADDRESS?: string;
  SORT_ORDER?: number;
}

export type NRM_WAREHOUSEPk = "WAREHOUSE_ID";
export type NRM_WAREHOUSEId = NRM_WAREHOUSE[NRM_WAREHOUSEPk];
export type NRM_WAREHOUSEOptionalAttributes = "WAREHOUSE_ID" | "WAREHOUSE_NAME" | "WAREHOUSE_PINCODE" | "WAREHOUSE_ADDRESS" | "SORT_ORDER";
export type NRM_WAREHOUSECreationAttributes = Optional<NRM_WAREHOUSEAttributes, NRM_WAREHOUSEOptionalAttributes>;

export class NRM_WAREHOUSE extends Model<NRM_WAREHOUSEAttributes, NRM_WAREHOUSECreationAttributes> implements NRM_WAREHOUSEAttributes {
  WAREHOUSE_ID!: number;
  WAREHOUSE_NAME?: string;
  WAREHOUSE_PINCODE?: string;
  WAREHOUSE_ADDRESS?: string;
  SORT_ORDER?: number;

  // NRM_WAREHOUSE hasMany NRM_ADMIN_WAREHOUSE_LINK via WAREHOUSE_ID
  NRM_ADMIN_WAREHOUSE_LINKs!: NRM_ADMIN_WAREHOUSE_LINK[];
  getNRM_ADMIN_WAREHOUSE_LINKs!: Sequelize.HasManyGetAssociationsMixin<NRM_ADMIN_WAREHOUSE_LINK>;
  setNRM_ADMIN_WAREHOUSE_LINKs!: Sequelize.HasManySetAssociationsMixin<NRM_ADMIN_WAREHOUSE_LINK, NRM_ADMIN_WAREHOUSE_LINKId>;
  addNRM_ADMIN_WAREHOUSE_LINK!: Sequelize.HasManyAddAssociationMixin<NRM_ADMIN_WAREHOUSE_LINK, NRM_ADMIN_WAREHOUSE_LINKId>;
  addNRM_ADMIN_WAREHOUSE_LINKs!: Sequelize.HasManyAddAssociationsMixin<NRM_ADMIN_WAREHOUSE_LINK, NRM_ADMIN_WAREHOUSE_LINKId>;
  createNRM_ADMIN_WAREHOUSE_LINK!: Sequelize.HasManyCreateAssociationMixin<NRM_ADMIN_WAREHOUSE_LINK>;
  removeNRM_ADMIN_WAREHOUSE_LINK!: Sequelize.HasManyRemoveAssociationMixin<NRM_ADMIN_WAREHOUSE_LINK, NRM_ADMIN_WAREHOUSE_LINKId>;
  removeNRM_ADMIN_WAREHOUSE_LINKs!: Sequelize.HasManyRemoveAssociationsMixin<NRM_ADMIN_WAREHOUSE_LINK, NRM_ADMIN_WAREHOUSE_LINKId>;
  hasNRM_ADMIN_WAREHOUSE_LINK!: Sequelize.HasManyHasAssociationMixin<NRM_ADMIN_WAREHOUSE_LINK, NRM_ADMIN_WAREHOUSE_LINKId>;
  hasNRM_ADMIN_WAREHOUSE_LINKs!: Sequelize.HasManyHasAssociationsMixin<NRM_ADMIN_WAREHOUSE_LINK, NRM_ADMIN_WAREHOUSE_LINKId>;
  countNRM_ADMIN_WAREHOUSE_LINKs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_WAREHOUSE {
    return NRM_WAREHOUSE.init({
    WAREHOUSE_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    WAREHOUSE_NAME: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: "WAREHOUSE_NAME"
    },
    WAREHOUSE_PINCODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    WAREHOUSE_ADDRESS: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    SORT_ORDER: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NRM_WAREHOUSE',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "WAREHOUSE_ID" },
        ]
      },
      {
        name: "WAREHOUSE_NAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "WAREHOUSE_NAME" },
        ]
      },
    ]
  });
  }
}

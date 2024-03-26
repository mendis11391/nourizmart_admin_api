import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { NRM_PRODUCT_CATEGORY, NRM_PRODUCT_CATEGORYId } from './NRM_PRODUCT_CATEGORY';

export interface NRM_PRODUCTSAttributes {
  PRODUCTS_ID: number;
  PRODUCT_CATEGORY_ID: number;
  PRODUCT_NAME?: string;
  IS_ACTIVE: string;
  FILE?: any;
}

export type NRM_PRODUCTSPk = "PRODUCTS_ID";
export type NRM_PRODUCTSId = NRM_PRODUCTS[NRM_PRODUCTSPk];
export type NRM_PRODUCTSOptionalAttributes = "PRODUCTS_ID" | "PRODUCT_NAME" | "FILE";
export type NRM_PRODUCTSCreationAttributes = Optional<NRM_PRODUCTSAttributes, NRM_PRODUCTSOptionalAttributes>;

export class NRM_PRODUCTS extends Model<NRM_PRODUCTSAttributes, NRM_PRODUCTSCreationAttributes> implements NRM_PRODUCTSAttributes {
  PRODUCTS_ID!: number;
  PRODUCT_CATEGORY_ID!: number;
  PRODUCT_NAME?: string;
  IS_ACTIVE!: string;
  FILE?: any;

  // NRM_PRODUCTS belongsTo NRM_PRODUCT_CATEGORY via PRODUCT_CATEGORY_ID
  PRODUCT_CATEGORY!: NRM_PRODUCT_CATEGORY;
  getPRODUCT_CATEGORY!: Sequelize.BelongsToGetAssociationMixin<NRM_PRODUCT_CATEGORY>;
  setPRODUCT_CATEGORY!: Sequelize.BelongsToSetAssociationMixin<NRM_PRODUCT_CATEGORY, NRM_PRODUCT_CATEGORYId>;
  createPRODUCT_CATEGORY!: Sequelize.BelongsToCreateAssociationMixin<NRM_PRODUCT_CATEGORY>;

  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_PRODUCTS {
    return NRM_PRODUCTS.init({
    PRODUCTS_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PRODUCT_CATEGORY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'NRM_PRODUCT_CATEGORY',
        key: 'PRODUCT_CATEGORY_ID'
      }
    },
    PRODUCT_NAME: {
      type: DataTypes.STRING(3000),
      allowNull: true,
      unique: "NRM_PRODUCTS_U1"
    },
    IS_ACTIVE: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    FILE: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NRM_PRODUCTS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PRODUCTS_ID" },
        ]
      },
      {
        name: "NRM_PRODUCTS_U1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PRODUCT_NAME" },
        ]
      },
      {
        name: "FK_PRODUCT_CATEGORY_ID",
        using: "BTREE",
        fields: [
          { name: "PRODUCT_CATEGORY_ID" },
        ]
      },
    ]
  });
  }
}

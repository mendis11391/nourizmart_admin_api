import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { NRM_PRODUCTS, NRM_PRODUCTSId } from './NRM_PRODUCTS';

export interface NRM_PRODUCT_CATEGORYAttributes {
  PRODUCT_CATEGORY_ID: number;
  PRODUCT_CATEGORY_NAME: string;
}

export type NRM_PRODUCT_CATEGORYPk = "PRODUCT_CATEGORY_ID";
export type NRM_PRODUCT_CATEGORYId = NRM_PRODUCT_CATEGORY[NRM_PRODUCT_CATEGORYPk];
export type NRM_PRODUCT_CATEGORYOptionalAttributes = "PRODUCT_CATEGORY_ID";
export type NRM_PRODUCT_CATEGORYCreationAttributes = Optional<NRM_PRODUCT_CATEGORYAttributes, NRM_PRODUCT_CATEGORYOptionalAttributes>;

export class NRM_PRODUCT_CATEGORY extends Model<NRM_PRODUCT_CATEGORYAttributes, NRM_PRODUCT_CATEGORYCreationAttributes> implements NRM_PRODUCT_CATEGORYAttributes {
  PRODUCT_CATEGORY_ID!: number;
  PRODUCT_CATEGORY_NAME!: string;

  // NRM_PRODUCT_CATEGORY hasMany NRM_PRODUCTS via PRODUCT_CATEGORY_ID
  NRM_PRODUCTs!: NRM_PRODUCTS[];
  getNRM_PRODUCTs!: Sequelize.HasManyGetAssociationsMixin<NRM_PRODUCTS>;
  setNRM_PRODUCTs!: Sequelize.HasManySetAssociationsMixin<NRM_PRODUCTS, NRM_PRODUCTSId>;
  addNRM_PRODUCT!: Sequelize.HasManyAddAssociationMixin<NRM_PRODUCTS, NRM_PRODUCTSId>;
  addNRM_PRODUCTs!: Sequelize.HasManyAddAssociationsMixin<NRM_PRODUCTS, NRM_PRODUCTSId>;
  createNRM_PRODUCT!: Sequelize.HasManyCreateAssociationMixin<NRM_PRODUCTS>;
  removeNRM_PRODUCT!: Sequelize.HasManyRemoveAssociationMixin<NRM_PRODUCTS, NRM_PRODUCTSId>;
  removeNRM_PRODUCTs!: Sequelize.HasManyRemoveAssociationsMixin<NRM_PRODUCTS, NRM_PRODUCTSId>;
  hasNRM_PRODUCT!: Sequelize.HasManyHasAssociationMixin<NRM_PRODUCTS, NRM_PRODUCTSId>;
  hasNRM_PRODUCTs!: Sequelize.HasManyHasAssociationsMixin<NRM_PRODUCTS, NRM_PRODUCTSId>;
  countNRM_PRODUCTs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_PRODUCT_CATEGORY {
    return NRM_PRODUCT_CATEGORY.init({
    PRODUCT_CATEGORY_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PRODUCT_CATEGORY_NAME: {
      type: DataTypes.STRING(500),
      allowNull: false,
      unique: "UNIQUE_CATEGORY_NAME"
    }
  }, {
    sequelize,
    tableName: 'NRM_PRODUCT_CATEGORY',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PRODUCT_CATEGORY_ID" },
        ]
      },
      {
        name: "UNIQUE_CATEGORY_NAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PRODUCT_CATEGORY_NAME" },
        ]
      },
    ]
  });
  }
}

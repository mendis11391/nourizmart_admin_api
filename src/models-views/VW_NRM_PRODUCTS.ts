import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VW_NRM_PRODUCTSAttributes {
  productId: number;
  productCategoryName?: string;
  productName?: string;
  isActive: string;
  file?: string;
}

export type VW_NRM_PRODUCTSOptionalAttributes = "productId" | "productCategoryName" | "productName" | "file";
export type VW_NRM_PRODUCTSCreationAttributes = Optional<VW_NRM_PRODUCTSAttributes, VW_NRM_PRODUCTSOptionalAttributes>;

export class VW_NRM_PRODUCTS extends Model<VW_NRM_PRODUCTSAttributes, VW_NRM_PRODUCTSCreationAttributes> implements VW_NRM_PRODUCTSAttributes {
  productId!: number;
  productCategoryName?: string;
  productName?: string;
  isActive!: string;
  file?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof VW_NRM_PRODUCTS {
    return VW_NRM_PRODUCTS.init({
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    productCategoryName: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    productName: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    isActive: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    file: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VW_NRM_PRODUCTS',
    timestamps: false
  });
  }
}

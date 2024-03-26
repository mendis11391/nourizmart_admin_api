import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VW_NRM_PRODUCT_PRICE_LINKAttributes {
  productPriceLinkId: number;
  productName?: string;
  ProductId?: number;
  pincode?: string;
  pincodId?: number;
  price?: number;
  isActive?: string;
  file?: any;
}

export type VW_NRM_PRODUCT_PRICE_LINKOptionalAttributes = "productPriceLinkId" | "productName" | "ProductId" | "pincode" | "pincodId" | "price" | "isActive" | "file";
export type VW_NRM_PRODUCT_PRICE_LINKCreationAttributes = Optional<VW_NRM_PRODUCT_PRICE_LINKAttributes, VW_NRM_PRODUCT_PRICE_LINKOptionalAttributes>;

export class VW_NRM_PRODUCT_PRICE_LINK extends Model<VW_NRM_PRODUCT_PRICE_LINKAttributes, VW_NRM_PRODUCT_PRICE_LINKCreationAttributes> implements VW_NRM_PRODUCT_PRICE_LINKAttributes {
  productPriceLinkId!: number;
  productName?: string;
  ProductId?: number;
  pincode?: string;
  pincodId?: number;
  price?: number;
  isActive?: string;
  file?: any;


  static initModel(sequelize: Sequelize.Sequelize): typeof VW_NRM_PRODUCT_PRICE_LINK {
    return VW_NRM_PRODUCT_PRICE_LINK.init({
    productPriceLinkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    productName: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pincode: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    pincodId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    isActive: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y"
    },
    file: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VW_NRM_PRODUCT_PRICE_LINK',
    timestamps: false
  });
  }
}

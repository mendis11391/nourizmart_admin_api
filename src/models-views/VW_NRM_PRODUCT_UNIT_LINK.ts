import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VW_NRM_PRODUCT_UNIT_LINKAttributes {
  PRODUCT_CATEGORY_ID?: number;
  UNIT_SYMBOL?: string;
}

export type VW_NRM_PRODUCT_UNIT_LINKOptionalAttributes = "PRODUCT_CATEGORY_ID" | "UNIT_SYMBOL";
export type VW_NRM_PRODUCT_UNIT_LINKCreationAttributes = Optional<VW_NRM_PRODUCT_UNIT_LINKAttributes, VW_NRM_PRODUCT_UNIT_LINKOptionalAttributes>;

export class VW_NRM_PRODUCT_UNIT_LINK extends Model<VW_NRM_PRODUCT_UNIT_LINKAttributes, VW_NRM_PRODUCT_UNIT_LINKCreationAttributes> implements VW_NRM_PRODUCT_UNIT_LINKAttributes {
  PRODUCT_CATEGORY_ID?: number;
  UNIT_SYMBOL?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof VW_NRM_PRODUCT_UNIT_LINK {
    return VW_NRM_PRODUCT_UNIT_LINK.init({
    PRODUCT_CATEGORY_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UNIT_SYMBOL: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VW_NRM_PRODUCT_UNIT_LINK',
    timestamps: false
  });
  }
}

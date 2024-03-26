import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VW_NRM_PRODUCT_CATEGORYAttributes {
  PRODUCT_CATEGORY_ID: number;
  PRODUCT_CATEGORY_NAME: string;
}

export type VW_NRM_PRODUCT_CATEGORYOptionalAttributes = "PRODUCT_CATEGORY_ID";
export type VW_NRM_PRODUCT_CATEGORYCreationAttributes = Optional<VW_NRM_PRODUCT_CATEGORYAttributes, VW_NRM_PRODUCT_CATEGORYOptionalAttributes>;

export class VW_NRM_PRODUCT_CATEGORY extends Model<VW_NRM_PRODUCT_CATEGORYAttributes, VW_NRM_PRODUCT_CATEGORYCreationAttributes> implements VW_NRM_PRODUCT_CATEGORYAttributes {
  PRODUCT_CATEGORY_ID!: number;
  PRODUCT_CATEGORY_NAME!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof VW_NRM_PRODUCT_CATEGORY {
    return VW_NRM_PRODUCT_CATEGORY.init({
    PRODUCT_CATEGORY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    PRODUCT_CATEGORY_NAME: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'VW_NRM_PRODUCT_CATEGORY',
    timestamps: false
  });
  }
}

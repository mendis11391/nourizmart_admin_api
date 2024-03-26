import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface NRM_PRODUCT_PRICE_LINKAttributes {
  PRODUCT_PRICE_LINK_ID: number;
  PRODUCT_ID?: number;
  PINCODE_ID?: number;
  PRICE?: number;
  CREATED_BY?: string;
  CREATED_DATE?: Date;
  UPDATED_BY?: string;
  UPDATED_DATE?: Date;
  is_Active?: string;
}

export type NRM_PRODUCT_PRICE_LINKPk = "PRODUCT_PRICE_LINK_ID";
export type NRM_PRODUCT_PRICE_LINKId = NRM_PRODUCT_PRICE_LINK[NRM_PRODUCT_PRICE_LINKPk];
export type NRM_PRODUCT_PRICE_LINKOptionalAttributes = "PRODUCT_PRICE_LINK_ID" | "PRODUCT_ID" | "PINCODE_ID" | "PRICE" | "CREATED_BY" | "CREATED_DATE" | "UPDATED_BY" | "UPDATED_DATE" | "is_Active";
export type NRM_PRODUCT_PRICE_LINKCreationAttributes = Optional<NRM_PRODUCT_PRICE_LINKAttributes, NRM_PRODUCT_PRICE_LINKOptionalAttributes>;

export class NRM_PRODUCT_PRICE_LINK extends Model<NRM_PRODUCT_PRICE_LINKAttributes, NRM_PRODUCT_PRICE_LINKCreationAttributes> implements NRM_PRODUCT_PRICE_LINKAttributes {
  PRODUCT_PRICE_LINK_ID!: number;
  PRODUCT_ID?: number;
  PINCODE_ID?: number;
  PRICE?: number;
  CREATED_BY?: string;
  CREATED_DATE?: Date;
  UPDATED_BY?: string;
  UPDATED_DATE?: Date;
  is_Active?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_PRODUCT_PRICE_LINK {
    return NRM_PRODUCT_PRICE_LINK.init({
    PRODUCT_PRICE_LINK_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PRODUCT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PINCODE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRICE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    CREATED_BY: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    CREATED_DATE: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    UPDATED_BY: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    UPDATED_DATE: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    is_Active: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y"
    }
  }, {
    sequelize,
    tableName: 'NRM_PRODUCT_PRICE_LINK',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PRODUCT_PRICE_LINK_ID" },
        ]
      },
      {
        name: "NRM_PRODUCT_PRICE_U1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PRODUCT_ID" },
          { name: "PINCODE_ID" },
        ]
      },
    ]
  });
  }
}

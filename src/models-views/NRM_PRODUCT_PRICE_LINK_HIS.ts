import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface NRM_PRODUCT_PRICE_LINK_HISAttributes {
  PRODUCT_PRICE_LINK_HIS_ID: number;
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

export type NRM_PRODUCT_PRICE_LINK_HISPk = "PRODUCT_PRICE_LINK_HIS_ID";
export type NRM_PRODUCT_PRICE_LINK_HISId = NRM_PRODUCT_PRICE_LINK_HIS[NRM_PRODUCT_PRICE_LINK_HISPk];
export type NRM_PRODUCT_PRICE_LINK_HISOptionalAttributes = "PRODUCT_PRICE_LINK_HIS_ID" | "PRODUCT_ID" | "PINCODE_ID" | "PRICE" | "CREATED_BY" | "CREATED_DATE" | "UPDATED_BY" | "UPDATED_DATE" | "is_Active";
export type NRM_PRODUCT_PRICE_LINK_HISCreationAttributes = Optional<NRM_PRODUCT_PRICE_LINK_HISAttributes, NRM_PRODUCT_PRICE_LINK_HISOptionalAttributes>;

export class NRM_PRODUCT_PRICE_LINK_HIS extends Model<NRM_PRODUCT_PRICE_LINK_HISAttributes, NRM_PRODUCT_PRICE_LINK_HISCreationAttributes> implements NRM_PRODUCT_PRICE_LINK_HISAttributes {
  PRODUCT_PRICE_LINK_HIS_ID!: number;
  PRODUCT_PRICE_LINK_ID!: number;
  PRODUCT_ID?: number;
  PINCODE_ID?: number;
  PRICE?: number;
  CREATED_BY?: string;
  CREATED_DATE?: Date;
  UPDATED_BY?: string;
  UPDATED_DATE?: Date;
  is_Active?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_PRODUCT_PRICE_LINK_HIS {
    return NRM_PRODUCT_PRICE_LINK_HIS.init({
    PRODUCT_PRICE_LINK_HIS_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PRODUCT_PRICE_LINK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NRM_PRODUCT_PRICE_LINK_HIS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PRODUCT_PRICE_LINK_HIS_ID" },
        ]
      },
      {
        name: "NRM_PRODUCT_PRICE_HIS_U1",
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

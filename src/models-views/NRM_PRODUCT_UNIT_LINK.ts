import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface NRM_PRODUCT_UNIT_LINKAttributes {
  PRODUCT_UNIT_LINK_ID: number;
  PRODUCT_CATEGORY_ID?: number;
  UNIT_ID?: number;
}

export type NRM_PRODUCT_UNIT_LINKPk = "PRODUCT_UNIT_LINK_ID";
export type NRM_PRODUCT_UNIT_LINKId = NRM_PRODUCT_UNIT_LINK[NRM_PRODUCT_UNIT_LINKPk];
export type NRM_PRODUCT_UNIT_LINKOptionalAttributes = "PRODUCT_UNIT_LINK_ID" | "PRODUCT_CATEGORY_ID" | "UNIT_ID";
export type NRM_PRODUCT_UNIT_LINKCreationAttributes = Optional<NRM_PRODUCT_UNIT_LINKAttributes, NRM_PRODUCT_UNIT_LINKOptionalAttributes>;

export class NRM_PRODUCT_UNIT_LINK extends Model<NRM_PRODUCT_UNIT_LINKAttributes, NRM_PRODUCT_UNIT_LINKCreationAttributes> implements NRM_PRODUCT_UNIT_LINKAttributes {
  PRODUCT_UNIT_LINK_ID!: number;
  PRODUCT_CATEGORY_ID?: number;
  UNIT_ID?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_PRODUCT_UNIT_LINK {
    return NRM_PRODUCT_UNIT_LINK.init({
    PRODUCT_UNIT_LINK_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PRODUCT_CATEGORY_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UNIT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NRM_PRODUCT_UNIT_LINK',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PRODUCT_UNIT_LINK_ID" },
        ]
      },
      {
        name: "NRM_PRODUCT_UNIT_LINK_U1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PRODUCT_CATEGORY_ID" },
          { name: "UNIT_ID" },
        ]
      },
    ]
  });
  }
}

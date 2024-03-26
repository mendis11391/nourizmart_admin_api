import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface NRM_DELIVERY_TYPEAttributes {
  NRM_DELIVERY_TYPE_ID: number;
  NRM_DELIVERY_TYPE_NAME?: string;
}

export type NRM_DELIVERY_TYPEPk = "NRM_DELIVERY_TYPE_ID";
export type NRM_DELIVERY_TYPEId = NRM_DELIVERY_TYPE[NRM_DELIVERY_TYPEPk];
export type NRM_DELIVERY_TYPEOptionalAttributes = "NRM_DELIVERY_TYPE_ID" | "NRM_DELIVERY_TYPE_NAME";
export type NRM_DELIVERY_TYPECreationAttributes = Optional<NRM_DELIVERY_TYPEAttributes, NRM_DELIVERY_TYPEOptionalAttributes>;

export class NRM_DELIVERY_TYPE extends Model<NRM_DELIVERY_TYPEAttributes, NRM_DELIVERY_TYPECreationAttributes> implements NRM_DELIVERY_TYPEAttributes {
  NRM_DELIVERY_TYPE_ID!: number;
  NRM_DELIVERY_TYPE_NAME?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_DELIVERY_TYPE {
    return NRM_DELIVERY_TYPE.init({
    NRM_DELIVERY_TYPE_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NRM_DELIVERY_TYPE_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NRM_DELIVERY_TYPE',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NRM_DELIVERY_TYPE_ID" },
        ]
      },
    ]
  });
  }
}

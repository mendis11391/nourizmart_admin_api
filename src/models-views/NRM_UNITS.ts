import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface NRM_UNITSAttributes {
  UNIT_ID: number;
  UNIT_NAME?: string;
  UNIT_SYMBOL?: string;
}

export type NRM_UNITSPk = "UNIT_ID";
export type NRM_UNITSId = NRM_UNITS[NRM_UNITSPk];
export type NRM_UNITSOptionalAttributes = "UNIT_ID" | "UNIT_NAME" | "UNIT_SYMBOL";
export type NRM_UNITSCreationAttributes = Optional<NRM_UNITSAttributes, NRM_UNITSOptionalAttributes>;

export class NRM_UNITS extends Model<NRM_UNITSAttributes, NRM_UNITSCreationAttributes> implements NRM_UNITSAttributes {
  UNIT_ID!: number;
  UNIT_NAME?: string;
  UNIT_SYMBOL?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof NRM_UNITS {
    return NRM_UNITS.init({
    UNIT_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UNIT_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "UNIQUE_UNIT_NAME"
    },
    UNIT_SYMBOL: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "UNIQUE_UNIT_SYMBOL"
    }
  }, {
    sequelize,
    tableName: 'NRM_UNITS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UNIT_ID" },
        ]
      },
      {
        name: "UNIQUE_UNIT_NAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UNIT_NAME" },
        ]
      },
      {
        name: "UNIQUE_UNIT_SYMBOL",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UNIT_SYMBOL" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VW_NRM_UNITSAttributes {
  UNIT_ID: number;
  UNIT_NAME?: string;
  UNIT_SYMBOL?: string;
}

export type VW_NRM_UNITSOptionalAttributes = "UNIT_ID" | "UNIT_NAME" | "UNIT_SYMBOL";
export type VW_NRM_UNITSCreationAttributes = Optional<VW_NRM_UNITSAttributes, VW_NRM_UNITSOptionalAttributes>;

export class VW_NRM_UNITS extends Model<VW_NRM_UNITSAttributes, VW_NRM_UNITSCreationAttributes> implements VW_NRM_UNITSAttributes {
  UNIT_ID!: number;
  UNIT_NAME?: string;
  UNIT_SYMBOL?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof VW_NRM_UNITS {
    return VW_NRM_UNITS.init({
    UNIT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    UNIT_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UNIT_SYMBOL: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VW_NRM_UNITS',
    timestamps: false
  });
  }
}

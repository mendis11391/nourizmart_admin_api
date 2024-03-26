import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VW_NRM_AREAAttributes {
  areaId: number;
  areaName: string;
  pincodeId: number;
}

export type VW_NRM_AREAOptionalAttributes = "areaId" | "pincodeId";
export type VW_NRM_AREACreationAttributes = Optional<VW_NRM_AREAAttributes, VW_NRM_AREAOptionalAttributes>;

export class VW_NRM_AREA extends Model<VW_NRM_AREAAttributes, VW_NRM_AREACreationAttributes> implements VW_NRM_AREAAttributes {
  areaId!: number;
  areaName!: string;
  pincodeId!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof VW_NRM_AREA {
    return VW_NRM_AREA.init({
    areaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    areaName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    pincodeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'VW_NRM_AREA',
    timestamps: false
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VW_NRM_WAREHOUSEAttributes {
  warehouseId: number;
  warehouseName?: string;
}

export type VW_NRM_WAREHOUSEOptionalAttributes = "warehouseId" | "warehouseName";
export type VW_NRM_WAREHOUSECreationAttributes = Optional<VW_NRM_WAREHOUSEAttributes, VW_NRM_WAREHOUSEOptionalAttributes>;

export class VW_NRM_WAREHOUSE extends Model<VW_NRM_WAREHOUSEAttributes, VW_NRM_WAREHOUSECreationAttributes> implements VW_NRM_WAREHOUSEAttributes {
  warehouseId!: number;
  warehouseName?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof VW_NRM_WAREHOUSE {
    return VW_NRM_WAREHOUSE.init({
    warehouseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    warehouseName: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VW_NRM_WAREHOUSE',
    timestamps: false
  });
  }
}

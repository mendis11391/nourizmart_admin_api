import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VW_NRM_DISTRICTAttributes {
  districtId: number;
  districtName: string;
  stateID: number;
}

export type VW_NRM_DISTRICTOptionalAttributes = "districtId" | "stateID";
export type VW_NRM_DISTRICTCreationAttributes = Optional<VW_NRM_DISTRICTAttributes, VW_NRM_DISTRICTOptionalAttributes>;

export class VW_NRM_DISTRICT extends Model<VW_NRM_DISTRICTAttributes, VW_NRM_DISTRICTCreationAttributes> implements VW_NRM_DISTRICTAttributes {
  districtId!: number;
  districtName!: string;
  stateID!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof VW_NRM_DISTRICT {
    return VW_NRM_DISTRICT.init({
    districtId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    districtName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    stateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'VW_NRM_DISTRICT',
    timestamps: false
  });
  }
}

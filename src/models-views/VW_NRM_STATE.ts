import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VW_NRM_STATEAttributes {
  stateId: number;
  stateName: string;
}

export type VW_NRM_STATEOptionalAttributes = "stateId";
export type VW_NRM_STATECreationAttributes = Optional<VW_NRM_STATEAttributes, VW_NRM_STATEOptionalAttributes>;

export class VW_NRM_STATE extends Model<VW_NRM_STATEAttributes, VW_NRM_STATECreationAttributes> implements VW_NRM_STATEAttributes {
  stateId!: number;
  stateName!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof VW_NRM_STATE {
    return VW_NRM_STATE.init({
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stateName: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'VW_NRM_STATE',
    timestamps: false
  });
  }
}

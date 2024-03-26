import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VW_NRM_LOOKUP_BASEAttributes {
  lookUp: string;
  lookUpValue: string;
  lookUpDesc?: string;
}

export type VW_NRM_LOOKUP_BASEOptionalAttributes = "lookUp" | "lookUpValue" | "lookUpDesc";
export type VW_NRM_LOOKUP_BASECreationAttributes = Optional<VW_NRM_LOOKUP_BASEAttributes, VW_NRM_LOOKUP_BASEOptionalAttributes>;

export class VW_NRM_LOOKUP_BASE extends Model<VW_NRM_LOOKUP_BASEAttributes, VW_NRM_LOOKUP_BASECreationAttributes> implements VW_NRM_LOOKUP_BASEAttributes {
  lookUp!: string;
  lookUpValue!: string;
  lookUpDesc?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof VW_NRM_LOOKUP_BASE {
    return VW_NRM_LOOKUP_BASE.init({
    lookUp: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    lookUpValue: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    lookUpDesc: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VW_NRM_LOOKUP_BASE',
    timestamps: false
  });
  }
}

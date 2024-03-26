import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VW_NRM_GROUPAttributes {
  groupId: number;
  groupName: string;
  groupCode: string;
}

export type VW_NRM_GROUPOptionalAttributes = "groupId";
export type VW_NRM_GROUPCreationAttributes = Optional<VW_NRM_GROUPAttributes, VW_NRM_GROUPOptionalAttributes>;

export class VW_NRM_GROUP extends Model<VW_NRM_GROUPAttributes, VW_NRM_GROUPCreationAttributes> implements VW_NRM_GROUPAttributes {
  groupId!: number;
  groupName!: string;
  groupCode!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof VW_NRM_GROUP {
    return VW_NRM_GROUP.init({
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    groupName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    groupCode: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'VW_NRM_GROUP',
    timestamps: false
  });
  }
}

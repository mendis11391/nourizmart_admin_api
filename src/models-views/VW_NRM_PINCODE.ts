import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VW_NRM_PINCODEAttributes {
  pincodeId: number;
  pincode: string;
  districtId: number;
}

export type VW_NRM_PINCODEOptionalAttributes = "pincodeId" | "districtId";
export type VW_NRM_PINCODECreationAttributes = Optional<VW_NRM_PINCODEAttributes, VW_NRM_PINCODEOptionalAttributes>;

export class VW_NRM_PINCODE extends Model<VW_NRM_PINCODEAttributes, VW_NRM_PINCODECreationAttributes> implements VW_NRM_PINCODEAttributes {
  pincodeId!: number;
  pincode!: string;
  districtId!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof VW_NRM_PINCODE {
    return VW_NRM_PINCODE.init({
    pincodeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pincode: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    districtId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'VW_NRM_PINCODE',
    timestamps: false
  });
  }
}

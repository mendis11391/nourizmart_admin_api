import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VW_NRM_CUSTOMER_DETAILS_BASEAttributes {
  firebaseId: string;
  firstname: string;
  lastname?: string;
  mobile?: string;
  email?: string;
}

export type VW_NRM_CUSTOMER_DETAILS_BASEOptionalAttributes = "lastname" | "mobile" | "email";
export type VW_NRM_CUSTOMER_DETAILS_BASECreationAttributes = Optional<VW_NRM_CUSTOMER_DETAILS_BASEAttributes, VW_NRM_CUSTOMER_DETAILS_BASEOptionalAttributes>;

export class VW_NRM_CUSTOMER_DETAILS_BASE extends Model<VW_NRM_CUSTOMER_DETAILS_BASEAttributes, VW_NRM_CUSTOMER_DETAILS_BASECreationAttributes> implements VW_NRM_CUSTOMER_DETAILS_BASEAttributes {
  firebaseId!: string;
  firstname!: string;
  lastname?: string;
  mobile?: string;
  email?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof VW_NRM_CUSTOMER_DETAILS_BASE {
    return VW_NRM_CUSTOMER_DETAILS_BASE.init({
    firebaseId: {
      type: DataTypes.STRING(4000),
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VW_NRM_CUSTOMER_DETAILS_BASE',
    timestamps: false
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VW_NRM_ADMIN_AUTHAttributes {
  adminId: number;
  userName: string;
  mobile: number;
  firstName: string;
  lastName?: string;
  groupCode?: string;
  groupId?: string;
  password: string;
  isActive: string;
  warehouseNames?: string;
  warehouseIds?: string;
}

export type VW_NRM_ADMIN_AUTHOptionalAttributes = "adminId" | "lastName" | "groupCode" | "groupId" | "isActive" | "warehouseNames" | "warehouseIds";
export type VW_NRM_ADMIN_AUTHCreationAttributes = Optional<VW_NRM_ADMIN_AUTHAttributes, VW_NRM_ADMIN_AUTHOptionalAttributes>;

export class VW_NRM_ADMIN_AUTH extends Model<VW_NRM_ADMIN_AUTHAttributes, VW_NRM_ADMIN_AUTHCreationAttributes> implements VW_NRM_ADMIN_AUTHAttributes {
  adminId!: number;
  userName!: string;
  mobile!: number;
  firstName!: string;
  lastName?: string;
  groupCode?: string;
  groupId?: string;
  password!: string;
  isActive!: string;
  warehouseNames?: string;
  warehouseIds?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof VW_NRM_ADMIN_AUTH {
    return VW_NRM_ADMIN_AUTH.init({
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    userName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    mobile: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    groupCode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    groupId: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    isActive: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "Y"
    },
    warehouseNames: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    warehouseIds: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VW_NRM_ADMIN_AUTH',
    timestamps: false
  });
  }
}

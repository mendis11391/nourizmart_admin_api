import { Model, BuildOptions } from 'sequelize';
export interface INrmPincodeAttributes {
  PINCODE_ID: number,
  DISTRICT_ID: number,
  PINCODE: string,
  SORT_ORDER: number,
  IS_ACTIVE: string,
}
export interface INrmPincodeModel extends INrmPincodeAttributes, Model {}
export type INrmPincodeModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmPincodeModel;
};
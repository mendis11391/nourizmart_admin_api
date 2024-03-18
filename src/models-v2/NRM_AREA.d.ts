import { Model, BuildOptions } from 'sequelize';
export interface INrmAreaAttributes {
  AREA_ID: number,
  PINCODE_ID: number,
  AREA_NAME: string,
  SORT_ORDER: number,
  IS_ACTIVE: string,
}
export interface INrmAreaModel extends INrmAreaAttributes, Model {}
export type INrmAreaModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmAreaModel;
};
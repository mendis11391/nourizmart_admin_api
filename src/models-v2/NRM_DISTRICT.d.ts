import { Model, BuildOptions } from 'sequelize';
export interface INrmDistrictAttributes {
  DISTRICT_ID: number,
  STATE_ID: number,
  DISTRICT_NAME: string,
  SORT_ORDER: number,
  IS_ACTIVE: string,
}
export interface INrmDistrictModel extends INrmDistrictAttributes, Model {}
export type INrmDistrictModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmDistrictModel;
};
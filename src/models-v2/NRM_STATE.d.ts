import { Model, BuildOptions } from 'sequelize';
export interface INrmStateAttributes {
  STATE_ID: number,
  STATE_NAME: string,
  SORT_ORDER: number,
  IS_ACTIVE: string,
}
export interface INrmStateModel extends INrmStateAttributes, Model {}
export type INrmStateModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmStateModel;
};
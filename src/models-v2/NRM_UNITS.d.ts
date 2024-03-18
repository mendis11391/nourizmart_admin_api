import { Model, BuildOptions } from 'sequelize';
export interface INrmUnitsAttributes {
  UNIT_ID: number,
  UNIT_NAME?: string,
  UNIT_SYMBOL?: string,
}
export interface INrmUnitsModel extends INrmUnitsAttributes, Model {}
export type INrmUnitsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmUnitsModel;
};
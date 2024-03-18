import { Model, BuildOptions } from 'sequelize';
export interface INrmGroupAttributes {
  group_id: number,
  group_name: string,
  group_code: string,
}
export interface INrmGroupModel extends INrmGroupAttributes, Model {}
export type INrmGroupModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmGroupModel;
};
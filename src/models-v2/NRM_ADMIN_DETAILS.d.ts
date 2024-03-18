import { Model, BuildOptions } from 'sequelize';
export interface INrmAdminDetailsAttributes {
  admin_id: number,
  user_name: string,
  password: string,
  mobile: number,
  first_name: string,
  last_name?: string,
  GROUP_ID: number,
  is_active: string,
  CREATED_BY: string,
  CREATED_DATE: Date,
  UPDATED_BY?: string,
  UPDATED_DATE: Date,
}
export interface INrmAdminDetailsModel extends INrmAdminDetailsAttributes, Model {}
export type INrmAdminDetailsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmAdminDetailsModel;
};
import { Model, BuildOptions } from 'sequelize';
export interface INrmAdminWarehouseLinkAttributes {
  ADMIN_WAREHOUSE_LINK_ID: number,
  ADMIN_ID?: number,
  WAREHOUSE_ID?: number,
}
export interface INrmAdminWarehouseLinkModel extends INrmAdminWarehouseLinkAttributes, Model {}
export type INrmAdminWarehouseLinkModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmAdminWarehouseLinkModel;
};
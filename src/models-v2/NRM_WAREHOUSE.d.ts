import { Model, BuildOptions } from 'sequelize';
export interface INrmWarehouseAttributes {
  WAREHOUSE_ID: number,
  WAREHOUSE_NAME?: string,
  WAREHOUSE_PINCODE?: string,
  WAREHOUSE_ADDRESS?: string,
  SORT_ORDER?: number,
}
export interface INrmWarehouseModel extends INrmWarehouseAttributes, Model {}
export type INrmWarehouseModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmWarehouseModel;
};
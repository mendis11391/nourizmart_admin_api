import { Model, BuildOptions } from 'sequelize';
export interface INrmProductsAttributes {
  PRODUCTS_ID: number,
  PRODUCT_CATEGORY_ID: number,
  PRODUCT_NAME?: string,
  IS_ACTIVE: string,
  FILE?: any,
}
export interface INrmProductsModel extends INrmProductsAttributes, Model {}
export type INrmProductsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmProductsModel;
};
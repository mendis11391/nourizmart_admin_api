import { Model, BuildOptions } from 'sequelize';
export interface INrmProductCategoryAttributes {
  PRODUCT_CATEGORY_ID: number,
  PRODUCT_CATEGORY_NAME: string,
}
export interface INrmProductCategoryModel extends INrmProductCategoryAttributes, Model {}
export type INrmProductCategoryModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmProductCategoryModel;
};
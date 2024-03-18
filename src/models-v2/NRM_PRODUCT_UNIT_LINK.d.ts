import { Model, BuildOptions } from 'sequelize';
export interface INrmProductUnitLinkAttributes {
  PRODUCT_UNIT_LINK_ID: number,
  PRODUCT_CATEGORY_ID?: number,
  UNIT_ID?: number,
}
export interface INrmProductUnitLinkModel extends INrmProductUnitLinkAttributes, Model {}
export type INrmProductUnitLinkModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmProductUnitLinkModel;
};
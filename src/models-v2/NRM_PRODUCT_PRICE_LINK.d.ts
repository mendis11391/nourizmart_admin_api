import { Model, BuildOptions } from 'sequelize';
export interface INrmProductPriceLinkAttributes {
  PRODUCT_PRICE_LINK_ID: number,
  PRODUCT_ID?: number,
  PINCODE_ID?: number,
  PRICE?: number,
  CREATED_BY?: string,
  CREATED_DATE?: Date,
  UPDATED_BY?: string,
  UPDATED_DATE?: Date,
  is_Active?: string,
}
export interface INrmProductPriceLinkModel extends INrmProductPriceLinkAttributes, Model {}
export type INrmProductPriceLinkModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmProductPriceLinkModel;
};
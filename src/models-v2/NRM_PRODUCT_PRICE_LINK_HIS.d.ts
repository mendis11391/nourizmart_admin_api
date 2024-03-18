import { Model, BuildOptions } from 'sequelize';
export interface INrmProductPriceLinkHisAttributes {
  PRODUCT_PRICE_LINK_HIS_ID: number,
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
export interface INrmProductPriceLinkHisModel extends INrmProductPriceLinkHisAttributes, Model {}
export type INrmProductPriceLinkHisModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmProductPriceLinkHisModel;
};
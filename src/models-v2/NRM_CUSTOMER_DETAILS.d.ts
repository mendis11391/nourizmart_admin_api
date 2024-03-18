import { Model, BuildOptions } from 'sequelize';
export interface INrmCustomerDetailsAttributes {
  USER_ID: number,
  FIRE_BASE_ID: string,
  FIRST_NAME: string,
  LAST_NAME?: string,
  MOBILE?: string,
  EMAIL?: string,
  HOUSE_NO: string,
  STREET: string,
  AREA_ID: number,
  DISTRICT_ID: number,
  STATE_ID: number,
  PINCODE_ID: number,
  LANDMARK?: string,
  IS_ACTIVE: string,
  CREATED_BY: string,
  CREATED_DATE: Date,
  UPDATED_BY: string,
  UPDATED_DATE: Date,
}
export interface INrmCustomerDetailsModel extends INrmCustomerDetailsAttributes, Model {}
export type INrmCustomerDetailsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmCustomerDetailsModel;
};
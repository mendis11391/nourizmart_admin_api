import { Model, BuildOptions } from 'sequelize';
export interface INrmCustAddDetailsAttributes {
  NRM_CUST_ADD_DETAILS_ID: number,
  user_id?: number,
  HOUSE_NO?: string,
  STREET?: string,
  AREA_ID?: number,
  DISTRICT_ID?: number,
  STATE_ID?: number,
  PINCODE_ID?: number,
  LANDMARK?: string,
  is_active?: string,
  is_default?: string,
  CREATED_BY: string,
  CREATED_DATE: Date,
  UPDATED_BY: string,
  UPDATED_DATE: Date,
}
export interface INrmCustAddDetailsModel extends INrmCustAddDetailsAttributes, Model {}
export type INrmCustAddDetailsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmCustAddDetailsModel;
};
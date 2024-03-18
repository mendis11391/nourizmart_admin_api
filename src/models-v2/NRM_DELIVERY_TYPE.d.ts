import { Model, BuildOptions } from 'sequelize';
export interface INrmDeliveryTypeAttributes {
  NRM_DELIVERY_TYPE_ID: number,
  NRM_DELIVERY_TYPE_NAME?: string,
}
export interface INrmDeliveryTypeModel extends INrmDeliveryTypeAttributes, Model {}
export type INrmDeliveryTypeModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): INrmDeliveryTypeModel;
};
import { Model, BuildOptions } from 'sequelize';
export interface IMessagesAttributes {
  message?: string,
  created_at?: Date,
}
export interface IMessagesModel extends IMessagesAttributes, Model {}
export type IMessagesModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IMessagesModel;
};
import { Model, BuildOptions } from 'sequelize';
export interface ITest1Attributes {
  A?: string
}
export interface ITest1Model extends ITest1Attributes, Model {}
export type ITest1ModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ITest1Model;
};
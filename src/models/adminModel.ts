export interface AddAdmin {
  username: string;
  mobile: string;
  firstname: string;
  lastname: string;
  groupid: number;
  createdby: string;
  password?: string;
  operation: string;
  isActive: string;
  warehouseIds: Array<number>;
}

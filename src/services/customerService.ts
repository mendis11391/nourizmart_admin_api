import { query } from "../database/connection";

export class CustomerService {
  createNewCustomer(
    firebaseId: string,
    first_name: string,
    last_name: string,
    mobile: string,
    email: string,
    house_no: string,
    street: string,
    area: string,
    district: string,
    state: string,
    pincodeId: number,
    landmark: string,
    is_active: string
  ): Promise<any> {
    const sql = `INSERT INTO NRM_CUSTOMER_DETAILS (
        FIRE_BASE_ID, FIRST_NAME, LAST_NAME, MOBILE, EMAIL, HOUSE_NO, STREET, AREA_ID, DISTRICT_ID, STATE_ID, PINCODE_ID, LANDMARK, IS_ACTIVE, CREATED_BY, CREATED_DATE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?`;
    return query(sql, [
      firebaseId,
      first_name,
      last_name,
      mobile,
      email,
      house_no,
      street,
      area,
      district,
      state,
      pincodeId,
      landmark,
    ]);
  }

  checkIfCustomerExists(firebaseId: any): Promise<any> {
    const sql =
      "select count(1) as customerExist from NRM_CUSTOMER_DETAILS where FIRE_BASE_ID = (?)";
    return query(sql, [firebaseId]);
  }

  getCustomerInfo(firebaseId: any): Promise<any> {
    const sql =
      "select * from VW_NRM_CUSTOMER_DETAILS_BASE where firebaseId = (?)";
    return query(sql, [firebaseId]);
  }
}

export default CustomerService;

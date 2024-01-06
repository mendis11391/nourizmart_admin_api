import { query } from "../database/connection";

export class CustomerService {
  createNewCustomer(
    firebaseId: string,
    first_name: string,
    last_name: string,
    mobile: string,
    email: string,
    state: string,
    district: string,
    taluk: string,
    area: string,
    pincode: number,
    landmark: string,
    address: string
  ): Promise<any> {
    const sql =
      "INSERT INTO users (firebaseId, first_name, last_name, mobile, email, state, district, taluk, area, pincode, landmark, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?";
    return query(sql, [
      firebaseId,
      first_name,
      last_name,
      mobile,
      email,
      state,
      district,
      taluk,
      area,
      pincode,
      landmark,
      address,
    ]);
  }

  checkIfCustomerExists(firebaseId: any): Promise<any> {
    const sql =
      "select count(*) as customerExist from NRM_CUSTOMER_DETAILS where FIRE_BASE_ID = (?);";
    return query(sql, [firebaseId]);
  }
}

export default CustomerService;

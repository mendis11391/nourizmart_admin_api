import { query } from "../database/connection";

export class CustomerService {
  createNewCustomer(customerData: any): Promise<any> {
    const sql =
      "INSERT INTO NRM_CUSTOMER_DETAILS (FIRE_BASE_ID, FIRST_NAME, LAST_NAME, MOBILE, EMAIL, HOUSE_NO, STREET, AREA_ID, DISTRICT_ID, STATE_ID, PINCODE_ID, LANDMARK, IS_ACTIVE, CREATED_BY) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    return query(sql, [
      customerData.firebaseId,
      customerData.first_name,
      customerData.last_name,
      customerData.mobile,
      customerData.email,
      customerData.house_no,
      customerData.street,
      customerData.areaId,
      customerData.districtId,
      customerData.stateId,
      customerData.pincodeId,
      customerData.landmark,
      customerData.is_active,
      customerData.createdBy,
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
  // Test comment
}

export default CustomerService;

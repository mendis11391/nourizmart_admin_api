"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const axios_1 = __importDefault(require("axios"));
const connection_1 = require("../database/connection");
class AdminService {
    fetchDataBasedOnPincodes(pincode) {
        const apiUrl = `https://api.postalpincode.in/pincode/${pincode}`;
        const response = axios_1.default.get(apiUrl);
        return response;
    }
    addOrUpdateNewAdminUser(userData) {
        const sql = "CALL nrm_admin_workflow(?);";
        return (0, connection_1.query)(sql, [userData]);
    }
    adminUserLogin(userData) {
        // const sql = "SELECT NRM_ADMIN_AUTH(?,?) as result;";
        const sql = "select admin_id, user_name, mobile from NRM_ADMIN_DETAILS where user_name=?;";
        return (0, connection_1.query)(sql, [userData.username]);
    }
    // addInfoForPinCode(pincodeInfo: any): Promise<any> {
    //   const sql = "call nrm_location_wflow(?);";
    //   return query(sql, [pincodeInfo]);
    // }
    getStatesList() {
        const sql = "select * from VW_NRM_STATE;";
        return (0, connection_1.query)(sql);
    }
    getCitiesList(stateCode) {
        const sql = "select * from VW_NRM_DISTRICT where stateId = ?;";
        return (0, connection_1.query)(sql, [stateCode]);
    }
    getPincodesList(cityCode) {
        const sql = "select * from VW_NRM_PINCODE where districtId = ?;";
        return (0, connection_1.query)(sql, [cityCode]);
    }
    getAreasList(pincode) {
        const sql = "select * from VW_NRM_AREA where pincodeId = ?;";
        return (0, connection_1.query)(sql, [pincode]);
    }
}
exports.AdminService = AdminService;
exports.default = AdminService;
//# sourceMappingURL=adminService.js.map
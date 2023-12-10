"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.savePincodeInfo = exports.fetchArea = exports.fetchPincodes = exports.fetchCities = exports.fetchStates = exports.loadDataBasedOnPincodes = exports.adminLogin = exports.addOrUpdateNewAdminUser = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const adminService_1 = __importDefault(require("../services/adminService"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "..", ".env") });
const jwt = require("jsonwebtoken");
const adminService = new adminService_1.default();
const addOrUpdateNewAdminUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqParam = {
            username: req.body.username,
            mobile: req.body.mobile,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            groupid: req.body.groupid,
            createdby: req.body.createdby,
            password: req.body.password,
            operation: req.body.operation,
        };
        const result = yield adminService.addOrUpdateNewAdminUser(JSON.stringify(reqParam));
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.addOrUpdateNewAdminUser = addOrUpdateNewAdminUser;
const adminLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqParam = {
            username: req.body.username,
            password: req.body.password,
        };
        const result = yield adminService.adminUserLogin(reqParam);
        if (result && result[0] && result[0].result) {
            const accessToken = jwt.sign({ request: reqParam }, process.env.ACCESS_TOKEN_SECRET);
            res.json({ accessToken: accessToken });
        }
        else {
            res.json({ accessToken: null });
        }
    }
    catch (error) {
        console.error("Error in adminLogin:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.adminLogin = adminLogin;
const loadDataBasedOnPincodes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pincode = req.params.pincode;
        const externalData = yield adminService.fetchDataBasedOnPincodes(pincode);
        const updatedArr = externalData.data[0].PostOffice.map((val) => ({
            area: val.Name,
            pincode: val.Pincode,
            taluk: val.Block,
            state: val.State,
            district: val.District,
        }));
        res.json(updatedArr);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.loadDataBasedOnPincodes = loadDataBasedOnPincodes;
const fetchStates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const states = yield adminService.getStatesList();
        res.json(states);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.fetchStates = fetchStates;
const fetchCities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const stateCode = req.params.stateCode;
        const cities = yield adminService.getCitiesList(+stateCode);
        res.json(cities);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.fetchCities = fetchCities;
const fetchPincodes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cityCode = req.params.cityCode;
        const pincodes = yield adminService.getPincodesList(+cityCode);
        res.json(pincodes);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.fetchPincodes = fetchPincodes;
const fetchArea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pincode = req.params.pincode;
        const pincodes = yield adminService.getAreasList(+pincode);
        res.json(pincodes);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.fetchArea = fetchArea;
const savePincodeInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pincodeInfo = req.body;
        const result = yield adminService.addInfoForPinCode(pincodeInfo);
        res.json({ result: result[0][0].status });
    }
    catch (error) {
        console.error("Error in adding:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.savePincodeInfo = savePincodeInfo;
//# sourceMappingURL=adminController.js.map
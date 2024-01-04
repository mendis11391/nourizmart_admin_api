import { query } from "../database/connection";

export class ProductService {
  // {"productCategoryId":"1","unitId":"1","productName":"Tomato","isActive":"Y"}
  addProduct(productData: any, productImage: any): Promise<any> {
    const sql = "CALL NRM_PRODUCT_WORKFLOW (?,?)";
    return query(sql, [productData, productImage]);
  }

  listAllProducts(): Promise<any> {
    const sql = "select * from VW_NRM_PRODUCTS;";
    return query(sql);
  }

  fetchAllProductPincodeMappings(): Promise<any> {
    const sql = "SELECT * FROM VW_NRM_PRODUCT_PRICE_LINK;";
    return query(sql);
  }

  addProductPincodeMapping(mappingData: any): Promise<any> {
    const sql = "call NRM_PRODUCT_PRICE_WORKFLOW (?)";
    return query(sql, [mappingData]);
  }
}

export default ProductService;

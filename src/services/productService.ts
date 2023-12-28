// import pool from "../database/connection";

// class Products {
//   getAllProducts(callback: (error: any, results: any) => void) {
//     const query = "SELECT * FROM products";
//     pool.query(query, callback);
//   }

//   getProductById(
//     customerId: string,
//     callback: (error: any, results: any) => void
//   ) {
//     const query = "SELECT * FROM products WHERE product_id = ?";
//     pool.query(query, [customerId], callback);
//   }
// }

// export default new Products();
import { query } from "../database/connection";

export class ProductService {
  // {"productCategoryId":"1","unitId":"1","productName":"Tomato","isActive":"Y"}
  addProduct(productData: any): Promise<any> {
    const sql = "CALL NRM_PRODUCT_WORKFLOW (?)";
    return query(sql, [productData]);
  }
}

export default ProductService;

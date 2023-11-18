import pool from "../database/connection";

class Customers {
  getAll(callback: (error: any, results: any) => void) {
    const query = "SELECT * FROM customers";
    pool.query(query, callback);
  }
}

export default new Customers();

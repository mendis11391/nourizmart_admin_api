import { query } from "../database/connection";

export class AppService {
  /**
   * @returns Codedictionary values
   */
  getCodeDictionaryValues(): Promise<any> {
    const sql = "SELECT * FROM VW_NRM_LOOKUP_BASE;";
    return query(sql);
  }
}

export default AppService;

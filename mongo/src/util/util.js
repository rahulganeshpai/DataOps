"use strict";

/**
 * Class - Util
 * @description
 * Class having implementation details for Utils
 */
class Util {
  #httpstatus = {
    Success: 200,
    NotFound: 404,
    ServerError: 500,
  };
  generate_object(status, message) {
    return {
      status: this.#httpstatus[status],
      message: `${message}`,
    };
  }
}

/**
 * Instance - Util
 * @description
 * Instance of Util Class
 */
const util = new Util();
export default util;

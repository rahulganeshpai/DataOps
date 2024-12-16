import mongoose from "mongoose";

class Database {
  async initialise_connection(MONGO_URI, MONGO_PORT) {
    try {
      const URL = `${MONGO_URI}:${MONGO_PORT}`;
      const connect = mongoose.connect(URL);
      await Promise.all([connect]);
    } catch (error) {
      return { code: 500, message: `${error}` };
    }
  }
  async close_connection(){
    try {
      const disconnect = mongoose.connection.close();
      await Promise.all([disconnect]);
    }
    catch (error) {
      return { code: 500, message: `${error}` };
    }
  }
}

/**
 * Instance - Database
 * @description
 * Instance of Database Class
 */
const database = new Database();
export default database;

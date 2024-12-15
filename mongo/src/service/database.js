import mongoose from "mongoose";

class Database {
  initialise_connection() {
    mongoose
      .connect("mongodb://localhost:27017")
      .then((result) => console.log("connected"))
      .catch((err) => console.log("error", err));
  }
}

/**
 * Instance - Database
 * @description
 * Instance of Database Class
 */
const database = new Database();
export default database;

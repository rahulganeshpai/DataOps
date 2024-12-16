"use strict";

import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import router from "../routes/routes";
import generateEnv from "../../config/config";
import route_middleware from "../middleware/route";
import database from "./database";

/**
 * Class - Server
 * @description
 * Class having implementation details for Express server
 */
class Server {
  /**
   * Method - Add_Configurations
   * @description
   * Method for adding server configurations
   */
  #add_configurations() {
    const app = express();

    app.use(json());
    app.use(cors({ origin: "*" }));
    app.use(helmet());
    app.use(compression());
    app.use("/api/v1/", router);

    //Custom Middelwares
    app.use(route_middleware);
    return app;
  }
  /**
   * Method - Initialise
   * @description
   * Method for initialising server
   */
  initialise() {
    const { PORT, MONGO_URI, MONGO_PORT } = generateEnv();
    const app = this.#add_configurations();
    const init_server = app.listen(PORT, () => {
      console.log(`Listening on Port: ${PORT}`);
    });

    // Initialse MongoDB
    database.initialise_connection(MONGO_URI, MONGO_PORT);

    //Server graceful exit
    process.on("SIGTERM", () => {
      // Close MongoDB connection
      database.close_connection();
      console.log("Closing http server");
      init_server.close(() => {
        console.log("Http server closed");
        process.exit(0);
      });
      process.exit(0);
    });
    return init_server;
  }
}

/**
 * Instance - Server
 * @description
 * Instance of Server Class
 */
const server = new Server();
export default server;

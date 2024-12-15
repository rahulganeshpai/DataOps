"use strict";

import server from "./src/service/server";
import database from "./src/service/database";

// Initialse Server
server.initialise();

database.initialise_connection();

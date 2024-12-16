"use strict";

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost";
const MONGO_PORT = process.env.MONGO_PORT || 27017;

const generateEnv = () => {
  return {
    PORT: PORT,
    MONGO_URI: MONGO_URI,
    MONGO_PORT: MONGO_PORT,
  };
};

export default generateEnv;

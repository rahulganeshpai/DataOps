import frequencies_model from "../models/frequencies";
import api from "../api/mongo";

/**
 * Controller - Fetch All Documents
 * @description
 * Controller for Fetching All Documents
 */
const fetch_all = async (req, res) => {
  try {
    const find_all = api().find({}, {}, frequencies_model);
    const result = await Promise.all([find_all]);
    res.status(200).send(result);
  } catch (error) {
    console.log(`${error}`);
    res.status(500).send(`${error}`);
  }
};

/**
 * Function - Controller
 * @description
 * Function containing all route controllers for Airports
 */
const frequencies_controller = () => {
  return {
    fetch_all: fetch_all,
  };
};

export default frequencies_controller;

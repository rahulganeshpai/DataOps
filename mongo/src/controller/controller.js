import airports_model from "../models/airports";

/**
 * Controller - Fetch All Documents
 * @description
 * Controller for Fetching All Documents
 */
const fetch_all = async (_, res) => {
  try {
    const findall = airports_model.find({});
    const result = await Promise.all([findall]);
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Controller - Fetch Documents by ID
 * @description
 * Controller for Fetching Documents by ID
 */
const fetch_byid = async (req, res) => {
  try {
    const findOne = airports_model.findOne(req.body);
    const result = await Promise.all([findOne]);
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Controller - Delete All Documents
 * @description
 * Controller for Deleting All Documents
 */
const delete_all = async (_, res) => {
  try {
    const delete_all = airports_model.deleteMany({});
    const result = await Promise.all([delete_all]);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Controller - Update All Documents
 * @description
 * Controller for Updating All Documents
 */
const update_all = async (req, res) => {
  try {
    const update_docs = airports_model.updateMany({}, {"$set":req.body});
    const result = await Promise.all([update_docs]);
    console.log(result)
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Function - Controller
 * @description
 * Function containing all route controllers for Airports
 */
const controller = () => {
  return {
    fetch_all: fetch_all,
    fetch_byid: fetch_byid,
    delete_all: delete_all,
    update_all: update_all,
  };
};

export default controller;

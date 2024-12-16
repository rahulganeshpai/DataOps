import airports_model from "../models/airports";

/**
 * Controller - Welcome
 * @description
 * Controller for Welcome Page
 */
const welcome = async (_, res) => {
  try {
    res.status(200).send("Welcome to Mongo Data Store");
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Controller - Welcome
 * @description
 * Controller for Welcome Page
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
 * Controller - Welcome
 * @description
 * Controller for Welcome Page
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
 * Controller - Welcome
 * @description
 * Controller for Welcome Page
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
 * Function - Controller
 * @description
 * Function containing all route controllers
 */
const controller = () => {
  return {
    welcome: welcome,
    fetch_all: fetch_all,
    fetch_byid: fetch_byid,
    delete_all: delete_all
  };
};

export default controller;

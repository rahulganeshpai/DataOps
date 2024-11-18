"use strict";

/**
 * Controller - Welcome
 * @description
 * Controller for Welcome Page
 */
const welcome_route = async (_, res) => {
  try {
    res.status(200).send("Welcome to Mongo Data Store");
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
    welcome_route: welcome_route,
  };
};

export default controller;

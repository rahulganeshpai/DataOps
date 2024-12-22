/**
 * API - Find
 * @description
 * API for Finding all Documents
 */
const find = async (filter, projection, model) => {
  try {
    const findall = model.find(filter, projection);
    return findall;
    // return util.generate_object("Success", findall);
  } catch (error) {
    console.log(error);
    return error;
    // return util.generate_object("ServerError", error);
  }
};

/**
 * API - findOne
 * @description
 * API for Finding a single Document
 */
const findOne = async (req, model) => {
  try {
    const findOne = model.findOne(req);
    return findOne;
    // return util.generate_object("Success", findOne);
  } catch (error) {
    return error;
    // return util.generate_object("ServerError", error);
  }
};

/**
 * API - deleteMany
 * @description
 * API for Deleting multiple Documents
 */
const deleteMany = async (req, model) => {
  try {
    const delete_many = model.deleteMany(req);
    return delete_many;
    // return util.generate_object("Success", delete_many);
  } catch (error) {
    return error;
    // return util.generate_object("ServerError", error);
  }
};

/**
 * API - updateAll
 * @description
 * API for Updating multiple Documents
 */
const updateMany = async (req, model, query) => {
  try {
    const update_many = model.updateMany(req, query);
    return update_many;
    // return util.generate_object("Success", update_many);
  } catch (error) {
    return error;
    // return util.generate_object("ServerError", error);
  }
};

/**
 * Function - API
 * @description
 * Function containing all Mongoose API
 */
const api = () => {
  return {
    find: find,
    findOne: findOne,
    deleteMany: deleteMany,
    updateMany: updateMany,
  };
};

export default api;

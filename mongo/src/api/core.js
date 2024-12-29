/**
 * API - Promise
 * @description
 * API for returning Promise
 */
const core = async (req) => {
  try {
    const result = Promise.all([req]);
    return result;
  } catch (error) {
    console.log(`${error}`);
    return `${error}`;
  }
};

export default core;

/**
 * Middleware - Route Validation
 * @description
 * Middleware to validate routes
 */
const route_middleware = (req, res) => {
  try {
    let status = null;
    let message = null;

    if (req.originalUrl === "/") {
      status = 200;
      message = "Welcome to Mongo Data Store";
    } else {
      status = 404;
      message = "Service not found";
    }
    res.status(status).send(message);
  } catch (error) {
    res.status(error.response.status).send(error);
  }
};

export default route_middleware;

const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  if (process.env.NODE_ENV == "DEVELOPMENT") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  if (process.env.NODE_ENV == "PRODUCTION") {
    // Wrong Mongoose Object ID Error
    if (err.name == "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      err = new ErrorHandler(message, 400);
    }

    // Handling Mongoose Validation Error
    if (err.name == "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      err = new ErrorHandler(message, 400);
    }

    // Handling Mongoose Duplicated key errors
    if (err.code == 11000) {
      const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
      err = new ErrorHandler(message, 400);
    }

    // Handling wrong JWT error
    if (err.name == "JsonWebTokenError") {
      const message = `JSON Web Token is invalid. Try Again.`
      err = new ErrorHandler(message, 400);
    }

    // Handling token expired error
    if (err.name == "TokenExpiredError") {
      const message = `JSON Web Token is expired. Try Again.`
      err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};

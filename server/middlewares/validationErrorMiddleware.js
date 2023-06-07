const { celebrate, Joi, errors, isCelebrateError } = require('celebrate');

// Middleware to handle validation errors
const validationErrorMiddleware = (err, req, res, next) => {
  if (isCelebrateError(err)) {
    // Joi validation error occurred
    const errorDetails = err.details.get('body').details.map((detail) => ({
      message: detail.message,
      path: detail.path.join('.'),
    }));
    return res.status(400).json({ error: 'Validation error', details: errorDetails });
  }

  // Other errors
  return next(err);
};

// Export the middleware
module.exports = validationErrorMiddleware;

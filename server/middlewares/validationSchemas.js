const { celebrate, Joi, Segments } = require('celebrate');

const createTodoSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required().messages({
      'any.required': 'Title is required',
      'string.empty': 'Title cannot be empty',
    }),
    desc: Joi.string().required().messages({
      'any.required': 'Description is required',
      'string.empty': 'Description cannot be empty',
    }),
  }),
});

module.exports = {createTodoSchema};


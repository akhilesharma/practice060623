const express = require('express');
const { celebrate, Segments } = require('celebrate');
const todoController = require('../controllers/todoController');
const { createTodoSchema } = require('../middlewares/validationSchemas');

const router = express.Router();

// Routes
router.post('/posttodo',createTodoSchema, todoController.posttodo);

module.exports = router;

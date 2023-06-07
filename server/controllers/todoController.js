const todoService = require('../services/todoService');

exports.posttodo = async (req, res) => {
  try {
    const { title, desc } = req.body;
    const posttodo = await todoService.posttodo(title, desc);
    if (posttodo.status === 1) {
      res.status(201).json({ message: 'Todo created successfully', todo: posttodo.todo });
    }
  } catch (error) {
    console.error('Error occurred while creating todo', error);
    res.status(500).json({ message: 'Failed to create todo' });
  }
};

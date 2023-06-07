const todoModel = require('../models/todoModel');

exports.posttodo = async (title, desc) => {
  try {
    const todo = new todoModel({
      title,
      desc
    });

    // Save the todo to the database
    await todo.save();

    return { status: 1,todo:todo };
  } catch (error) {
    console.error('Error occurred while creating todo', error);
    throw new Error('Failed to create todo');
  }
};

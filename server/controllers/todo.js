const { Todo } = require('../models');

exports.list = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.create = async (req, res) => {
  const body = {
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    due_date: req.body.due_date,
  };

  try {
    const todo = await Todo.create(body);
    return res.status(201).json(todo);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.detail = (req, res) => {};

exports.update = (req, res) => {};

exports.updateStatus = (req, res) => {};

exports.destroy = (req, res) => {};

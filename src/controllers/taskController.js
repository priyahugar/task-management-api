const { v4: uuidv4 } = require('uuid');
const tasks = require('../data/sampleData.json');

// GET all tasks
exports.getAllTasks = (req, res) => {
  let result = tasks;

  const { status, priority, sortBy } = req.query;

  if (status) result = result.filter(t => t.status === status);
  if (priority) result = result.filter(t => t.priority === priority);
  if (sortBy === 'dueDate') result = result.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  res.status(200).json(result);
};

// GET task by ID
exports.getTaskById = (req, res) => {
  const task = tasks.find(t => t.taskId === req.params.taskId);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.status(200).json(task);
};

// CREATE task
exports.createTask = (req, res) => {
  const { title, description, status, priority, dueDate, tags } = req.body;

  if (!title || title.length > 100) {
    return res.status(400).json({ message: 'Title is required (max 100 chars)' });
  }

  const newTask = {
    taskId: uuidv4(),
    title,
    description: description || '',
    status: status || 'pending',
    priority: priority || 'low',
    dueDate: dueDate || null,
    tags: tags || [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

// UPDATE task (PUT/PATCH)
exports.updateTask = (req, res) => {
  const task = tasks.find(t => t.taskId === req.params.taskId);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  const { title, description, status, priority, dueDate, tags } = req.body;

  if (title) task.title = title;
  if (description) task.description = description;
  if (status) task.status = status;
  if (priority) task.priority = priority;
  if (dueDate) task.dueDate = dueDate;
  if (tags) task.tags = tags;

  task.updatedAt = new Date().toISOString();
  res.status(200).json(task);
};

// DELETE task
exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.taskId === req.params.taskId);
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  tasks.splice(index, 1);
  res.status(204).send();
};
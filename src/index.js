const express = require('express');
const app = express();
app.use(express.json());

let tasks = []; // in-memory storage for tasks

// GET all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// GET single task by id
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
});

// POST - create a new task
app.post('/tasks', (req, res) => {
  const { title, status } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    status
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT - update a task
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });

  const { title, status } = req.body;
  task.title = title;
  task.status = status;
  res.json(task);
});

// DELETE - remove a task
app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  tasks.splice(index, 1);
  res.json({ message: 'Task deleted successfully' });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
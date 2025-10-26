const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// GET all tasks
router.get('/', taskController.getAllTasks);

// GET task by ID
router.get('/:taskId', taskController.getTaskById);

// CREATE task
router.post('/', taskController.createTask);

// UPDATE task (PUT = full, PATCH = partial)
router.put('/:taskId', taskController.updateTask);
router.patch('/:taskId', taskController.updateTask);

// DELETE task
router.delete('/:taskId', taskController.deleteTask);

module.exports = router;
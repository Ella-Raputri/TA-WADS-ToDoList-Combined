import express from 'express'
import { createTask, deleteTask, getTasks, updateTask } from '../controllers/taskController.js';
import userAuth from '../middleware/userAuth.js';

const taskRouter = express.Router();
/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Task management
 */

/**
 * @swagger
 * /api/task/createTask:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - todo
 *             properties:
 *               todo:
 *                 type: string
 *                 description: Task content
 *     responses:
 *       201:
 *         description: Task created successfully
 *       400:
 *         description: Todo is required
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
taskRouter.post('/createTask', userAuth, createTask)

/**
 * @swagger
 * /api/task/getTasks:
 *   get:
 *     summary: Get all tasks for the current user
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: List of tasks returned successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
taskRouter.get('/getTasks', userAuth, getTasks)

/**
 * @swagger
 * /api/task/updateTask/{id}:
 *   put:
 *     summary: Update a task based on its ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the task to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               todo:
 *                 type: string
 *               completed:
 *                 type: boolean
 *               isEditing:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal server error
 */
taskRouter.put('/updateTask/:id', userAuth, updateTask)

/**
 * @swagger
 * /api/task/deleteTask/{id}:
 *   delete:
 *     summary: Delete a task based on its ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the task to delete
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal server error
 */
taskRouter.delete('/deleteTask/:id', userAuth, deleteTask)

export default taskRouter
import Task from "../models/Task.js";

export const createTask = async (req, res) => {
    const { todo } = req.body;
    const userId = req.userId; 
  
    if (!todo) {
      return res.status(400).json({ success: false, message: 'Todo is required' });
    }
  
    try {
      const newTask = await Task.create({ todo, userId });
      return res.status(201).json({ success: true, task: newTask });
    } 
    catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  

  export const getTasks = async (req, res) => {
    const userId = req.userId; 
    try {
      const tasks = await Task.findAll({ where: { userId } });
      return res.status(200).json({ success: true, tasks: tasks });
    } 
    catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  

  export const updateTask = async (req, res) => {
    const userId = req.userId; 
    const { id } = req.params;
    const { todo, completed, isEditing } = req.body;
  
    try {
      const task = await Task.findOne({ where: { id, userId } });
  
      if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found' });
      }
  
      task.todo = todo ?? task.todo;
      task.completed = completed ?? task.completed;
      task.isEditing = isEditing ?? task.isEditing;
  
      await task.save();
  
      return res.status(200).json({ success: true, task });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  

  export const deleteTask = async (req, res) => {
    const userId = req.userId; 
    const { id } = req.params;
  
    try {
      const task = await Task.findOne({ where: { id, userId } });
  
      if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found' });
      }
  
      await task.destroy();
      return res.status(200).json({ success: true, message: 'Task deleted successfully' });
    } 
    catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  
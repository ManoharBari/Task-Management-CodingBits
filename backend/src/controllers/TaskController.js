// const Task=require("../models/task.models.js");
import Task from "../models/task.models.js";

export const createTask = async (req,res) => {
  const data=req.body; 
  try{
    const model=new Task(data);
    await model.save();
    res.status(201)
       .json({message: 'Task is created', success: true});
  } catch(err) {
     res.status(500).json({message: 'Failed to create task', success: false});
  }
}

export const fetchAllTasks= async (req,res) => {
  try{
    const data= await Task.find({});
    res.status(200)
       .json({message: 'All Tasks', success: true, data});
  } catch(err) {
     res.status(500).json({message: 'Failed to get all tasks', success: false});
  }
}

export const updateTaskById= async (req,res) => {
  try{
    const id=req.params.id;
    const body=req.body;
    const obj={ $set: { ...body }};
    await Task.findByIdAndUpdate(id, obj); // findByIdAndUpdate (internal mongoose method)
    res.status(200)
       .json({message: 'Task updated', success: true });
  } catch(err) {
     res.status(500).json({message: 'Failed to updated task', success: false});
  }
}


export const deleteTaskById= async (req,res) => {
  try{
    const id=req.params.id;
    await Task.findByIdAndDelete(id);
    res.status(200)
       .json({message: 'Task is deleted', success: true});
  } catch(err) {
     res.status(500).json({message: 'Failed to delete task', success: false});
  }
}

// module.exports = {
//   createTask,
//   fetchAllTasks,
//   updateTaskById,
//   deleteTaskById
// };
// export default { createTask, fetchAllTasks, updateTaskById, deleteTaskById };
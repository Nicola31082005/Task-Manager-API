import Task from "../models/task-model.js";
import TaskInterface from "../types/task-type.js";
import { Types } from "mongoose";

export async function getAllUserTasks(userId: Types.ObjectId) {
    const tasks = await Task.find({ userId })
    
    return tasks
}

export async function getOneUserTask(taskId: string) {
    const task = await Task.findOne({_id: taskId})
    
    return task
}

export async function createTask(title: string, description: string, userId: Types.ObjectId) {
    
    if (!title) {
        throw new Error('Title is required.')
    }
    
    return await Task.create({ title, description, userId })
}

export async function updateTask(title: string, description: string, completed: boolean, taskId: string) {
    
    if (!title) {
        throw new Error('Title is required.')
    }

    return await Task.updateOne({_id: taskId}, { title, description, completed })
}

export async function deleteTask(taskId: string) {
    return await Task.deleteOne({ _id: taskId })
}
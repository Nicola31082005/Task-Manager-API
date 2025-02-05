import Task from "../models/task-model.js";
import TaskInterface from "../types/task-type.js";
import { Types } from "mongoose";

export async function getAllUserTasks(userId: Types.ObjectId) {
    const tasks = await Task.find({ userId })
    
    return tasks
}

export async function createTask(title: string, description: string, userId: Types.ObjectId) {
    
    if (!title) {
        throw new Error('Title is required.')
    }
    
    return await Task.create({ title, description, userId })

}
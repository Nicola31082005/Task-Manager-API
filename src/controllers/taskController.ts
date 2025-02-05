import { Router, Request, Response } from "express";
import { createTask, getAllUserTasks, getOneUserTask } from "../services/taskService.js";
import { Types } from "mongoose";

const taskController = Router();

taskController.get('/', async (req: Request, res: Response) => {
    try {
        if (!req.user) {
            throw new Error('You are not authenticated!')
        }

        const userId = typeof req.user === 'string' ? req.user : req.user.id

        if (!userId) {
            throw new Error('Invalid user ID')
        }

        const userTasks = await getAllUserTasks(userId)
        res.render('tasks/tasks', { tasks: userTasks })
    } catch (error) {
        console.error(error)
    }
})

taskController.post('/create', async (req: Request, res: Response) => {
    try {
        if (!req.user) {
            throw new Error('You are not authenticated!')
        }

        const userId = req.user.id
        const { title, description } = req.body;
        await createTask(title, description, userId)
        res.redirect('/tasks')

    } catch (error) {
        console.error(error)
    }
})

taskController.get('/edit/:id', async (req: Request, res: Response) => {
    try {
        const taskId = req.params.id

        const task = await getOneUserTask(taskId)
        res.render('tasks/edit-task', { task })
    } catch (error) {
        
    }
})



export default taskController

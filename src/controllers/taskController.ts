import { Router, Request, Response } from "express";
import { createTask, deleteTask, getAllUserTasks, getOneUserTask, updateTask } from "../services/taskService.js";

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
        res.render('tasks/tasks', { tasks: userTasks, title: 'Tasks' })
    } catch (error) {
        res.status(400).render('home', { title: 'Task Manager', error: error })
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
        res.status(400).render('home', { title: 'Task Manager', error: error })
    }
})

taskController.get('/edit/:id', async (req: Request, res: Response) => {
    try {
        const taskId = req.params.id

        const task = await getOneUserTask(taskId)
        res.render('tasks/edit-task', { task, title: 'Edit Task' })
    } catch (error) {
        res.status(400).render('home', { title: 'Task Manager', error: error })
    }
})

taskController.post('/edit/:id', async (req: Request, res: Response) => {
    try {
        const taskId = req.params.id
        const {title, description} = req.body
        const completed = req.body.completed === 'on';
        

        const task = await updateTask(title, description, completed, taskId)
        res.redirect('/tasks')
    } catch (error) {        
        const taskId = req.params.id
        const task = await getOneUserTask(taskId)
        res.status(400).render('tasks/edit-task', { task, title: 'Edit Task', error: error })
    }
})

taskController.post('/delete/:id', async (req: Request, res: Response) => {
    try {
        const taskId = req.params.id
        await deleteTask(taskId)
        
        res.redirect('/tasks')
    } catch (error) {
        res.status(400).render('home', { title: 'Task Manager', error: error })
    }
})

export default taskController

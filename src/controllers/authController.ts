import { Router } from "express";
import { Request, Response } from "express";
import { login, register } from "../services/authService.js";
import UserData from "../types/user-type.js";



const authController = Router();

authController.get('/login', (req: Request, res: Response) => {
    res.render('auth/login', { title: 'Login' })
})

authController.get('/register', (req: Request, res: Response) => {
    res.render('auth/register', { title: 'Register' })
})

authController.post('/register', async (req: Request, res: Response) => {
    const data: UserData = req.body;
    
    try {
        await register(data)
        res.redirect('/auth/login')
    } catch (error) {
        console.error(error)
        res.end()
    }
})

authController.post('/login', async (req: Request, res: Response) => {
    const {email, password}: UserData = req.body;
    
    try {
        const token = await login(email, password)
        res.cookie('auth', token, { httpOnly: true })
        res.redirect('/')
    } catch (error) {
        console.error(error)
    }

})

authController.get('/logout', async (req: Request, res: Response) => {
    res.clearCookie('auth');
    
    res.redirect('/')
})

export default authController
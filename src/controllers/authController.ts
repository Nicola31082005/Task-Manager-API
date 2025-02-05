import { Router } from "express";
import { Request, Response } from "express";
import { register } from "../services/authService.js";
import UserData from "../types/user-type.js";
import { console } from "inspector";


const authController = Router();

authController.get('/login', (req: Request, res: Response) => {
    res.render('auth/login')
})

authController.get('/register', (req: Request, res: Response) => {
    res.render('auth/register')
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
        // await login
    } catch (error) {
        console.error(error)
    }

})

export default authController
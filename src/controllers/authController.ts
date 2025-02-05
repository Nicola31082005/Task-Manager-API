import { Router } from "express";
import { Request, Response } from "express";
import { register } from "../services/authService.js";
import UserData from "../types/user-type.js";


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
    }

})

export default authController
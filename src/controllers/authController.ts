import { Router } from "express";
import { Request, Response } from "express";
import { log } from "node:console";

interface User {
    email: string,
    password: number,
    confirmPassword?: number,
    name?: string,
}

const authController = Router();

authController.get('/login', (req: Request, res: Response) => {
    res.render('auth/login')
})

authController.get('/register', (req: Request, res: Response) => {
    res.render('auth/register')
})

authController.post('/register', (req: Request, res: Response) => {
    const data: User = req.body;
    
    console.log(data);

    res.end()
    


})

export default authController
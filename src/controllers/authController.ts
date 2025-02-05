import { Router } from "express";
import { Request, Response } from "express";

const authController = Router();

authController.get('/login', (req: Request, res: Response) => {
    res.render('auth/login')
})

authController.get('/register', (req: Request, res: Response) => {
    res.render('auth/register')
})

export default authController
import { Router } from "express";
import { Request, Response } from "express";

const authController = Router();

authController.get('/login', (req: Request, res: Response) => {
    res.render('auth/login')
})

export default authController
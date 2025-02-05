import { Router } from "express";
import { Request, Response } from "express";

const authController = Router();

authController.get('/login', (req: Request, res: Response) => {
    res.render('login')
})

export default authController
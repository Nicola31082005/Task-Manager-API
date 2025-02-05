import { Router } from "express";
import { Request, Response } from "express";

const homeController = Router();

homeController.get('/', (req: Request, res: Response) => {
    res.send('App initialize')
 })
 


export { homeController }
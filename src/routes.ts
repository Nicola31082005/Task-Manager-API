import { Router, Request, Response } from "express";
import { homeController } from "./controllers/homeController.js";

const routes = Router();

routes.use(homeController)

routes.all('*', (req: Request, res: Response) => {
    res.render('404')
})


export default routes

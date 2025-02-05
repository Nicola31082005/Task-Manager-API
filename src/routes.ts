import { Router, Request, Response } from "express";
import { homeController } from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import authMiddleware from "./middleware/authMiddleware.js";
import taskController from "./controllers/taskController.js";

const routes = Router();

routes.use(authMiddleware)
routes.use(homeController)
routes.use('/auth', authController)
routes.use('/tasks', taskController)

routes.all('*', (req: Request, res: Response) => {
    res.render('404')
})


export default routes

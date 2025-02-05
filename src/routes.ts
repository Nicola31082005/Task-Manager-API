import { Router, Request, Response } from "express";
import { homeController } from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import authMiddleware from "./middleware/authMiddleware.js";

const routes = Router();

routes.use(authMiddleware)
routes.use(homeController)
routes.use('/auth', authController)

routes.all('*', (req: Request, res: Response) => {
    res.render('404')
})


export default routes

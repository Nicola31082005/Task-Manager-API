import express, { Application, Request, Response } from 'express';
import routes from './routes.js';
const app: Application = express();



app.use(routes)


app.listen(2000, () => console.log('Server is listening on port: 2000'))
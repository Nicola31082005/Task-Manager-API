import express, { Application, Request, Response } from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';
import path from 'path';

const app: Application = express();

// Handlebars config
app.engine('hbs', handlebars.engine({ extname: 'hbs', }));
app.set('view engine', 'hbs');
app.set('views', path.join(process.cwd(), 'src', 'views'))

// Serve static files
app.use(express.static(path.join(process.cwd(), "public")))
app.use(routes)


app.listen(2000, () => console.log('Server is listening on port: 2000'))
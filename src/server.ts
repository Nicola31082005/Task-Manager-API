import express, { Application, Request, Response } from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';
import path from 'path';
import 'dotenv/config';
import helmet from 'helmet';
import DbConnect from './config/db.js';

const app: Application = express();


// Secure vulnurability
app.use(helmet())

// Body parser middleware
app.use(express.urlencoded({ extended: false} ))

// Connect with DB
DbConnect()

// Handlebars config
app.engine('hbs', handlebars.engine({ extname: 'hbs', }));
app.set('view engine', 'hbs');
app.set('views', path.join(process.cwd(), 'src', 'views'))


// Serve static files
app.use(express.static(path.join(process.cwd(), "public")))
app.use(routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))
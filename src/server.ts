import express, { Application, Request, Response } from 'express';
const app: Application = express();

app.get('/', (req: Request, res: Response) => {
   res.send('App initialize')
})




app.listen(2000, () => console.log('Server is listening on port: 2000'))
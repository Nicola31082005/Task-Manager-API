import express from 'express';
const app = express();

app.get('/', (req, res) => {
   res.send('App initialize')
})




app.listen(2000, () => console.log('Server is listening on port: 2000'))
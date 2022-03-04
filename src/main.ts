import express, { Request, Response } from 'express';
import { resizeHandler } from './handlers';
import {checkCache} from './middleware/api.middleware';
const app = express();

app.use(express.static("public"));
app.use(checkCache);

app.get('/', (req: Request, res: Response):void => {
    res.status(200).send('Welcome to Image Resizer App').end();
});

app.get('/resize', resizeHandler);

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports=app;
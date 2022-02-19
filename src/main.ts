import express, { Request, Response } from 'express';
import { resizeImage } from './image-util/image';

const app = express();

app.get('/', (req: Request, res: Response) => {
  const newWidth: number = parseInt(req.query.width as string);
  const newHeight: number = parseInt(req.query.height as string);

  if (resizeImage(newWidth, newHeight) == true) {
    res.status(200).send('Image Resized Successfully.').end();
  } else {
    res.status(500).send('Failed!').end();
  }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

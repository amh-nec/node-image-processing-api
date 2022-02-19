import sharp from 'sharp';
import * as path from 'path';

export function resizeImage(newWidth: number, newHeight: number): boolean {
  path.resolve('./images/img.jpg');
  console.log(path.resolve('./images/img.jpg'));
  let ret = false;
  sharp(path.resolve('./images/img.jpg'))
    .resize(newWidth, newHeight)
    .toFile(path.resolve('./images/outimg.jpg'), (error, info) => {
      if (error) {
        console.log(error);
        ret = false;
      } else {
        console.log(info);
        ret = true;
      }
    });

  return ret;
}

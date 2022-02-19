import sharp from 'sharp';
import * as path from 'path';
import { generateOutPath } from '../helpers/helper';

export function resizeImage(newWidth: number, newHeight: number):boolean {
  // eslint-disable-next-line no-var
  var ret =false;
  sharp(path.resolve('./public/images/img.jpg'))
    .resize(newWidth, newHeight)
    .toFile(generateOutPath(newWidth,newHeight))
    .then((data)=>{
      console.log(data);
    })
    .catch((e)=>{
      console.log(e);
      ret= false;
    })
    .finally(()=>{
      ret= true;
    });
    return ret;
}

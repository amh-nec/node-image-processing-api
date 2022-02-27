import * as fs from 'fs';
import sharp from 'sharp';
import { generateOutPath,generatInPath } from '../helpers/helper';
export async function resizeImage(imageName:string,newWidth: number, newHeight: number):Promise<boolean> {
  // eslint-disable-next-line no-var
  var ret =false;
  const inImagePath:string =generatInPath(imageName);
  if(fs.existsSync(inImagePath))
  {
    sharp(inImagePath)
    .resize(newWidth, newHeight)
    .toFile(generateOutPath(imageName,newWidth,newHeight))
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
  }
  else
  {
    ret=false;
  }
  
    return ret;
}

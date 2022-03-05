import * as fs from 'fs';
import sharp from 'sharp';
import { generateOutPath,generatInPath } from '../helpers/helper';
export async function resizeImage(imageName:string,newWidth: number, newHeight: number):Promise<{ Result: boolean; Message: string; }> {
  const inImagePath:string =generatInPath(imageName);
  const outPath = generateOutPath(imageName,newWidth,newHeight);
  
  let ret={Result:true,
    Message:outPath};

  if(fs.existsSync(inImagePath) && newHeight>0 && newWidth>0)
  { 
    await sharp(inImagePath)
      .resize(newWidth, newHeight)
      .toFile(outPath);
  }
  else
  {
    ret ={Result:false,
      Message:"Invalid Inputs"};
  }
    return ret;
}

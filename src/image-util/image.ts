import * as fs from 'fs';
import sharp from 'sharp';
import { generateOutPath,generatInPath } from '../helpers/helper';
export function resizeImage(imageName:string,newWidth: number, newHeight: number):{Result:boolean,Message:string} {
  const inImagePath:string =generatInPath(imageName);
  const outPath = generateOutPath(imageName,newWidth,newHeight);
  
  let ret={Result:true,
    Message:outPath};

  if(fs.existsSync(inImagePath) && newHeight>0 && newWidth>0)
  { 
    sharp(inImagePath)
    .resize(newWidth, newHeight)
    .toFile(outPath)
    .then((data)=>{
      console.log(data);
    })
    .catch((e)=>{
      console.log(e);
      ret ={Result:false,
        Message:e};
    })
    .finally(()=>{
      ret ={Result:false,
        Message:outPath};
    });
  }
  else
  {
    ret ={Result:false,
      Message:"Invalid Inputs"};
  }
    return ret;
}

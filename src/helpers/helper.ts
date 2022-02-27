import path from "path";

export function generateOutPath(imagename:string,width:number,height:number):string{
   return path.resolve('./public/images/out/'+imagename+'-'+width+'-'+height+'.jpg');
}

export function generatInPath(imagename:string):string{
   return path.resolve('./public/images/in/'+imagename);
}
import path from "path";

export function generateOutPath(width:number,height:number):string{
   return path.resolve('./public/images/outimg-'+width+'-'+height+'.jpg')
}
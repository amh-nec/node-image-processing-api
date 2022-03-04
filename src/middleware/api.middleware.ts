import { NextFunction, Request, Response } from "express";
import * as fs  from 'fs';
import { generateOutPath } from "../helpers/helper";

export function checkCache(req:Request,res:Response,next:NextFunction){
    const newWidth: number = parseInt(req.query.width as string);
    const newHeight: number = parseInt(req.query.height as string);
    const imageName:string = req.query.image as string;
    const imgPath = generateOutPath(imageName,newWidth, newHeight);
    if (fs.existsSync(imgPath).valueOf()){
        res.sendFile(imgPath)
    }
    else{
        next();
    }
}
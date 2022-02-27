import { Request,Response } from "express";
import { resizeImage } from "./image-util/image";

export async function resizeHandler (req: Request, res: Response) {
    const newWidth: number = parseInt(req.query.width as string);
    const newHeight: number = parseInt(req.query.height as string)
    const url:string = req.query.image as string;
    
    console.log(await resizeImage(url,newWidth, newHeight));
    res.status(200).send('Image Resized Successfully.').end();
}
import e, { Request,Response } from "express";
import { resizeImage } from "./image-util/image";

export async function resizeHandler (req: Request, res: Response):Promise<void> {
    const newWidth: number = parseInt(req.query.width as string);
    const newHeight: number = parseInt(req.query.height as string)
    const url:string = req.query.image as string;
    const ret = resizeImage(url, newWidth, newHeight);
    if(ret.Result)
    {
        res.sendFile(ret.Message);
    }
    else
    {
        res.status(500).send(ret.Message).end();
    }   
}
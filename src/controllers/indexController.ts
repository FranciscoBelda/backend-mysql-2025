import {Request, Response} from "express";

class IndexController{
    public async index(req: Request, res: Response){
        res.status(400).json({
            status:true,
            message:'API is in /api/v1/games'
        });
    }
}
export const indexController: IndexController = new IndexController();
import {Request, Response} from "express";
import pool from "../database";
class GamesController{
    public async list(req: Request, res: Response){
        try{
            const data = await pool
                .then((r:any) =>
                    r.query('SELECT * FROM games'))
            res.status(200).json({
                status: true,
                data
            })
        }catch (e: any) {
            res.status(400).json({
                status: false,
                message: e.message
            })
        }
    }

    public async getOne(req: Request, res: Response){
        try{
            const {id} = req.params;
            const game = await pool.then((r:any) =>
            r.query('SELECT * FROM games WHERE id = ?',[id]));
            if (game.length>0){
                return res.status(200).json({
                    status:true,
                    data:game[0]
                })
            }
            res.status(404).json({
                status: false,
                message: 'Juego no encontrado'
            })
        }catch (e: any) {
            res.status(400).json({
                status: false,
                message: e.message
            })
        }
    }

    public async create(req:Request, res: Response){
        try{
            await pool.then((r: any) =>
                r.query('INSERT INTO games SET ?',[req.body]));
            res.status(201).json({
                status: true,
                message: 'Juego creado.'
            })
        }catch (e: any) {
            res.status(400).json({
                status: false,
                message: e.message
            })
        }
    }

    public async update(req: Request, res: Response){
        try{
            const {id} = req.params;
            const data:any = await pool.then((r:any) =>
            r.query('UPDATE games set ? WHERE id = ?',[req.body,id]));
            if(data.affectedRows>0){
                return res.status(200).json({
                    status: true,
                    message: 'Juego actualizado'
                })
            }
            res.status(404).json({
                status: false,
                message: 'Juego no encontrado'
            });
        }catch (e: any) {
            res.status(400).json({
                status: false,
                message: e.message
            })
        }
    }
    public async delete(req: Request, res: Response){
        try{
            const {id} = req.params;
            const data = await pool.then((r:any)  =>
            r.query('DELETE FROM games WHERE id = ?',[id]));
            if (data.affectedRows>0){
                return res.status(200).json({
                    status: true,
                    message: 'Juego borrado'
                })
            }
            res.status(404).json({
                status: false,
                message: 'Juego no encontrado'
            })
        }catch (e: any) {
            res.status(400).json({
                status: false,
                message: e.message
            })
        }
    }
}

const gamesController = new GamesController();
export default gamesController;
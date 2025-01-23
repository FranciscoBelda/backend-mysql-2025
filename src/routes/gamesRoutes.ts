import {Router, Request, Response} from "express";
import gamesController from "../controllers/gamesController";

class GamesRoutes{
    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config() {
        this.router.get('/',
            (req: Request, res: Response) => {
            gamesController.list(req, res)});
        this.router.get('/:id',
            (req: Request, res: Response) => {
            gamesController.getOne(req, res)});
        this.router.post('/',
            (req: Request, res: Response) => {
            gamesController.create(req, res)});
        this.router.put('/:id',
            (req: Request, res: Response) => {
            gamesController.update(req, res)});
        this.router.delete('/:id',
            (req: Request, res: Response) => {
            gamesController.delete(req, res)});
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;

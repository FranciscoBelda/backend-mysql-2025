import cors from "cors";
import express, {Application} from "express";
import morgan from "morgan";
import indexRoutes from './routes/indexRoutes';
//import gamesRoutes from './routes/gamesRoutes';
import pool from "./database";
import gamesRoutes from "./routes/gamesRoutes";

class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    private routes() {
         this.app.use('/api/v1/games', gamesRoutes);
         this.app.use('/', indexRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port: ', this.app.get('port'));
        })
    }
}

const server = new Server();
server.start();
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import { Routes } from './routes';
import { MongoDatabaseService } from './mongodb/mongo-database.service';

class App {
	public app: express.Application;
	public routePrv: Routes = new Routes();

	private _mongodb = new MongoDatabaseService();

	public constructor() {
		this.app = express();
		this.setup();
		this.routePrv.routes(this.app);
	}

	private setup(): void {
		this.app.use(logger('dev'));
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(cookieParser());
	}
}

export default new App().app;

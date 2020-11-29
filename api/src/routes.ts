import * as express from 'express';
import { HomeRouter } from './routes/home.router';
import { UserRouter } from './routes/user.router';

export class Routes {
	public nodesController: HomeRouter = new HomeRouter();

	public routes(app: express.Application): void {
		app.use(new HomeRouter().router);
		app.use(new UserRouter().router);
	}
}

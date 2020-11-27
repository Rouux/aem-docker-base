import { Request, Response } from 'express';
import * as express from 'express';

export class HomeRouter {
	public router: express.Application = express();

	public constructor() {
		this.init();
	}

	private init(): void {
		this.router.get('/', (_: Request, res: Response) => {
			res.status(200).json({
				message: 'Home is working !'
			});
		});
	}
}

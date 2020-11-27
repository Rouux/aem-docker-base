import { Request, Response } from 'express';
import * as express from 'express';
import { User } from '../mongodb/models/user.model';

export class UserRouter {
	public router: express.Application = express();

	public constructor() {
		this.init();
	}

	private init(): void {
		this.router.get('/', (_: Request, res: Response) => {
			User.find((err, users) => {
				if (err) res.status(500).send(err);
				res.status(200).json(users);
			});
		});

		this.router.post('/', (req: Request, res) => {
			User.createAndSave({
				username: req.body.username,
				password: req.body.password,
				email: req.body.email
			})
				.then(() => {
					res.status(201).json({
						message: 'User created successfully'
					});
				})
				.catch(error => {
					console.error(error);
					res.status(500).send(error);
				});
		});
	}
}

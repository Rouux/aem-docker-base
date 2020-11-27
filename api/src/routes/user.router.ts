import { Request, Response } from "express";
import * as express from "express";
import { User, createUser } from "../mongodb/models/user.model";

export class UserRouter {
	public router: express.Application = express();

	constructor() {
		this.init();
	}

	private init(): void {
		this.router.get("/", (_: Request, res: Response) => {
			User.find((err, users) => {
				if (err) res.status(500).send(err);
				res.status(200).json(users);
			});
		});

		this.router.post("/", (req: Request, res) => {
			const user = createUser({
				username: req.body.username,
				password: req.body.password,
				email: req.body.email,
			});
			console.log(user);
			user.save((error) => {
				if (error) {
					console.error(error);
					res.status(500).send(error);
				} else {
					res.status(201).json({
						message: "User created successfully",
					});
				}
			});
		});
	}
}

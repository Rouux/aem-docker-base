import { Request, Response } from 'express';
import { User } from '../mongodb/models/user.model';
import { Router } from './router';

export class UserRouter extends Router {
	public constructor() {
		super();
	}

	protected setup(): void {
		// _./ Get all Users \._
		this.get('/users', (_: Request, res: Response) => {
			User.find((err, users) => {
				if (err) res.status(500).send(err);
				res.status(200).json(users);
			});
		});

		// _./ Get one User by id \._
		this.get('/users/:id', (req: Request, res: Response) => {
			User.findById(req.params.id, (err, users) => {
				if (err) res.status(500).send(err);
				res.status(200).json(users);
			});
		});

		// _./ Create one User \._
		this.put('/users', (req: Request, res: Response) => {
			User.createDocument(req.body)
				.save()
				.then(user => {
					res.status(201).json({
						message: 'User created successfully',
						user
					});
				})
				.catch(error => {
					console.error(error);
					res.status(500).send(error);
				});
		});

		// _./ Update one User \._
		this.post('/users/:id', (req: Request, res: Response) => {
			User.findByIdAndUpdate(req.params.id, req.body)
				.then(user => {
					res.status(201).json({
						message: 'User updated successfully',
						user
					});
				})
				.catch(error => {
					console.error(error);
					res.status(500).send(error);
				});
		});

		// _./ Delete one User \._
		this.delete('/users', (req: Request, res: Response) => {
			User.findOneAndDelete(req.body)
				.then(user => {
					res.status(201).json({
						message: 'User deleted successfully',
						user
					});
				})
				.catch(error => {
					console.error(error);
					res.status(500).send(error);
				});
		});
	}
}

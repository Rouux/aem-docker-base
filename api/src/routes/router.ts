import * as express from 'express';

export type RouterOptions = {
	noSetup?: boolean;
};

/**
 * Calls #setup on ctor
 */
export abstract class Router {
	public router: express.Application = express();

	public noSetup = false;

	public constructor(options: RouterOptions = {}) {
		this.noSetup = options.noSetup || this.noSetup;
		if (!this.noSetup) this.setup();
	}

	public get: typeof express.application.get = (
		path: string,
		...args: any[]
	): express.Application => this.router.get(path, ...args);

	public post: typeof express.application.post = (
		path: string,
		...args: any[]
	): express.Application => this.router.post(path, ...args);

	public delete: typeof express.application.delete = (
		path: string,
		...args: any[]
	): express.Application => this.router.delete(path, ...args);

	public put: typeof express.application.put = (
		path: string,
		...args: any[]
	): express.Application => this.router.put(path, ...args);

	protected abstract setup(): void;
}

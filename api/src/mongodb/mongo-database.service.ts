import * as mongoose from 'mongoose';

const {
	MONGO_URL,
	MONGO_INITDB_DATABASE,
	MONGO_INITDB_USERNAME,
	MONGO_INITDB_PASSWORD
} = process.env;

const dbHost = `${MONGO_URL}/${MONGO_INITDB_DATABASE}`;

export class MongoDatabaseService {
	public constructor() {
		if (MONGO_URL) this.connectMongoDB();
	}

	private connectMongoDB(): void {
		console.log('Connecting to MongoDB . . .');
		mongoose
			.connect(dbHost, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				user: MONGO_INITDB_USERNAME,
				pass: MONGO_INITDB_PASSWORD,
				authSource: MONGO_INITDB_DATABASE,
				dbName: MONGO_INITDB_DATABASE
			})
			.then(() => {
				console.log('MongoDB is connected.');
			})
			.catch(err => {
				console.log(err);
				console.log('MongoDB connection unsuccessful.');
			});
	}
}

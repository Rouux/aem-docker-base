import { SaveOptions } from 'mongoose';
import {
	createSchema,
	ExtractDoc,
	ExtractProps,
	Type,
	typedModel
} from 'ts-mongoose';

export const UserSchema = createSchema(
	{
		username: Type.string({ required: true }),
		password: Type.string({ required: true }),
		email: Type.string({ required: true, unique: true, index: true })
	},
	{
		timestamps: { createdAt: true }
	}
);

export type UserDoc = ExtractDoc<typeof UserSchema>;
export type UserProps = ExtractProps<typeof UserSchema>;

export const User = typedModel('User', UserSchema, 'users', undefined, {
	create,
	createAndSave
});

function create(props: Partial<UserProps>): UserDoc {
	return new User(props);
}

function createAndSave(
	props: Partial<UserProps>,
	options: SaveOptions = {}
): Promise<UserDoc> {
	return new User(props).save(options);
}

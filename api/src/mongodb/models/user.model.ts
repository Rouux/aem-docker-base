import {
	createSchema,
	ExtractDoc,
	ExtractProps,
	Type,
	typedModel
} from 'ts-mongoose';
import { ModelFields, createDocument } from './template/model';

export const UserSchema = createSchema(
	{
		username: Type.string({ required: true }),
		password: Type.string({ required: true }),
		email: Type.string({ required: true, unique: true, index: true })
	},
	{
		timestamps: {
			createdAt: true,
			updatedAt: true
		}
	}
);

type Document = ExtractDoc<typeof UserSchema>;
type Props = ExtractProps<typeof UserSchema>;

export type UserProps = ModelFields<Props>;
export const User = typedModel('User', UserSchema, 'users', undefined, {
	createDocument: (props: UserProps): Document => createDocument(User, props)
});

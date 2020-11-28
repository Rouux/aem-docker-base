import { SaveOptions } from 'mongoose';
import {
	createSchema,
	ExtractDoc,
	ExtractProps,
	Type,
	typedModel
} from 'ts-mongoose';
import { ModelFields, createDocument as mongoDocument } from './template/model';

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

export const User = typedModel('User', UserSchema, 'users', undefined, {
	createDocument
});

// ----- END OF FILE ----- //

type Document = ExtractDoc<typeof UserSchema>;
type Props = ExtractProps<typeof UserSchema>;

function createDocument(
	props: ModelFields<Props>,
	options?: SaveOptions
): Promise<Document>;

// eslint-disable-next-line no-redeclare
function createDocument(props: ModelFields<Props>, noSave: boolean): Document;

// eslint-disable-next-line no-redeclare
function createDocument(
	props: ModelFields<Props>,
	optionsOrSave: SaveOptions | boolean = true
): Promise<Document> | Document {
	return mongoDocument(User, props, optionsOrSave);
}

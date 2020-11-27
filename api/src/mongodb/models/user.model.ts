import {
	createSchema,
	ExtractDoc,
	ExtractProps,
	Type,
	typedModel,
} from "ts-mongoose";

export const UserSchema = createSchema(
	{
		username: Type.string({ required: true }),
		password: Type.string({ required: true }),
		email: Type.string({ required: true, unique: true, index: true }),
	},
	{
		timestamps: { createdAt: true },
	},
);

export const User = typedModel("User", UserSchema, "users");
export type UserDoc = ExtractDoc<typeof UserSchema>;
export type UserProps = ExtractProps<typeof UserSchema>;

export function createUser(props: Partial<UserProps>) {
	return new User(props);
}

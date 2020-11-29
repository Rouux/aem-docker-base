import { SaveOptions } from 'mongoose';
import {
	Constructable,
	OptionalKeys,
	RequiredKeys
} from '../../../utils/types';

type ToExclude = '__v';
type ToMakeOptional = '_id' | 'createdAt' | 'updatedAt';

export type ModelFields<T> = Pick<
	T,
	Exclude<Exclude<RequiredKeys<T>, ToExclude>, ToMakeOptional>
> &
	Partial<Pick<T, OptionalKeys<T>>> &
	Partial<Pick<T, Extract<ToMakeOptional, keyof T>>>;

export function createDocument<M extends Constructable, Props, Doc>(
	model: M,
	props: ModelFields<Props>
): Doc {
	return new model(props);
}

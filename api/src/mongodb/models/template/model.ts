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
	props: ModelFields<Props>,
	optionsOrSave: SaveOptions | boolean = true
): Promise<Doc> | Doc {
	if (optionsOrSave === true) return new model(props).save();
	if (typeof optionsOrSave === 'boolean') return new model(props);
	if (typeof optionsOrSave === 'object')
		return new model(props).save(optionsOrSave);
	return Promise.reject({
		message: 'An error occured on User.createDocument(...)',
		properties: props
	});
}

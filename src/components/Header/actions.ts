import { HeaderActionTypes } from './constants';


export type ActionTypes = {
	type: HeaderActionTypes.TEXT_FILTER,
	newText: string
}

export const text_filter = (newText:string = ''):ActionTypes => ({
	type: HeaderActionTypes.TEXT_FILTER,
	newText,
});

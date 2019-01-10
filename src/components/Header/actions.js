import { TEXT_FILTER } from './constants';

export const text_filter = (newText = '') => ({
	type: TEXT_FILTER,
	newText,
});

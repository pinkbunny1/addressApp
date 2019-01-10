import { EDIT_ENTRY, DELETE_ENTRY } from './constants';

export const editEntry = (id, newEntry) => ({
	type: EDIT_ENTRY,
	id,
	newEntry,
});

export const removeEntry = id => ({
	type: DELETE_ENTRY,
	id,
});

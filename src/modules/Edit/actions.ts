import { ActionTypes, EntryData, EntryActionTypes } from '../Add'




export const editEntry = (id:string, newEntry:EntryData):ActionTypes => ({
	type: EntryActionTypes.EDIT_ENTRY,
	id,
	newEntry,
});

export const removeEntry = (id:string):ActionTypes => ({
	type: EntryActionTypes.DELETE_ENTRY,
	id,
});
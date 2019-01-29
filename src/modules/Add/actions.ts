import { EntryActionTypes } from './constants';
import { v4 as uuid } from 'uuid';
// import { string } from 'prop-types';


// using this as a source to convert js to ts https://medium.com/@pie6k/better-way-to-create-type-safe-redux-actions-and-reducers-with-typescript-45386808c103

export interface EntryData {
	id?:string;
	firstname: string;
	lastname: string;
}

export type ActionTypes  = {
	type: EntryActionTypes.CREATE_ENTRY,
	entry: EntryData;
} | { type: EntryActionTypes.EDIT_ENTRY, id: string, newEntry: EntryData} | { type: EntryActionTypes.DELETE_ENTRY, id: string}

 

export const createEntry = ({ firstname = '', lastname = '' }:EntryData): ActionTypes => ({
	type: EntryActionTypes.CREATE_ENTRY,
	entry: {
		id: uuid(),
		firstname,
		lastname,
	},
});



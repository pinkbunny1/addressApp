import { CREATE_ENTRY } from './constants';
import { v4 as uuid } from 'uuid';
import { string } from 'prop-types';


// using this as a source to convert js to ts https://medium.com/@pie6k/better-way-to-create-type-safe-redux-actions-and-reducers-with-typescript-45386808c103

interface EntryData {
	id?:string;
	firstname: string;
	lastname: string;
}

interface CreateAction {
	type: 'CREATE_ENTRY';
	entry: EntryData;
}

 

export const createEntry = ({ firstname = '', lastname = '' }:EntryData): CreateAction => ({
	type: CREATE_ENTRY,
	entry: {
		id: uuid(),
		firstname,
		lastname,
	},
});



import { CREATE_ENTRY } from './constants';
import uuid from 'uuid';

export const createEntry = ({ firstname = '', lastname = '' } = {}) => ({
	type: CREATE_ENTRY,
	entry: {
		id: uuid(),
		firstname,
		lastname,
	},
});

import { CREATE_ENTRY } from './constants';

const addReducer = (state = [], action) => {
	switch (action.type) {
		case CREATE_ENTRY:
			return [...state, action.entry];
		default:
			return state;
	}
};

export default addReducer;

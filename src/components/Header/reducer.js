import { TEXT_FILTER } from './constants';

const defaultState = {
	text: '',
};

const filterReducer = (state = defaultState, action) => {
	switch (action.type) {
		case TEXT_FILTER:
			return {
				text: action.newText,
			};
		default:
			return state;
	}
};

export default filterReducer;

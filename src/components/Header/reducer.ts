import { HeaderActionTypes } from './constants';
import { ActionTypes } from './actions'

interface FilterData {
	text : string;
}
const defaultState:FilterData = {
	text: '',
};



const filterReducer = (state = defaultState, action:ActionTypes):FilterData => {
	switch (action.type) {
		case HeaderActionTypes.TEXT_FILTER:
			return {
				text: action.newText,
			};
		default:
			return state;
	}
};

export default filterReducer;

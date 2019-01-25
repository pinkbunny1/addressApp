import { combineReducers } from 'redux'

import { addReducer } from './modules/Add';
import { filterReducer } from './components/Header';

const rootReducer = combineReducers({
	add : addReducer,
	filter: filterReducer,
});

export default rootReducer

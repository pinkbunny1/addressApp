import { combineReducers } from 'redux';

import { addReducer } from './modules/Add';
import { filterReducer } from './components/Header';

const rootReducer = combineReducers({
	add : addReducer,
	// edit: editReducer, (combined edit and add reducer)
	filter: filterReducer,
});

export default rootReducer;
// export { rootReducer };

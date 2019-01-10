import { combineReducers } from 'redux';

import { addReducer } from './modules/Add';
import { editReducer } from './modules/Edit';
import { filterReducer } from './components/Header';

const rootReducer = combineReducers({
	add: addReducer,
	edit: editReducer,
	filter: filterReducer,
});

export default rootReducer;
// export { rootReducer };

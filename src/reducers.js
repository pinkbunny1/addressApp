import { combineReducers } from 'redux'

<<<<<<< HEAD
import { addReducer } from './modules/Add';
import { filterReducer } from './components/Header';

const rootReducer = combineReducers({
	add : addReducer,
	// edit: editReducer, (combined edit and add reducer)
	filter: filterReducer,
});
=======
import { addReducer } from './modules/Add'
import { editReducer } from './modules/Edit'
import { filterReducer } from './components/Header'

const rootReducer = combineReducers({
  add: addReducer,
  edit: editReducer,
  filter: filterReducer,
})
>>>>>>> 3764c47c92d40da3eddac352b20b1deb6f90f5fd

export default rootReducer

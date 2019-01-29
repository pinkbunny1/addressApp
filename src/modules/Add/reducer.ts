// import { CREATE_ENTRY } from './constants'
import {EntryActionTypes} from './constants'
// import { EDIT_ENTRY, DELETE_ENTRY } from './constants';
import { ActionTypes, EntryData } from './actions'



const initialState: EntryData[] = []

const addReducer = (state = initialState, action:ActionTypes): EntryData[] => {
  switch (action.type) {
    case EntryActionTypes.CREATE_ENTRY:
      return [...state, action.entry]

    case EntryActionTypes.EDIT_ENTRY:
    console.log('state in edit entry:', state, action);
    return state.map(entryItem => {
    	return entryItem.id === action.id ? { ...entryItem, ...action.newEntry } : entryItem;
    });

    case EntryActionTypes.DELETE_ENTRY:
    	return state.filter(({ id }) => id !== action.id);
    default:
      return state
  }
}

export default addReducer

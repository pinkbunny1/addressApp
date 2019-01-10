import {
    CREATE_ENTRY,
    EDIT_ENTRY,
    DELETE_ENTRY
} from '../constants/action_types';

export default (state = [], action) => {
    switch (action.type) {
        case CREATE_ENTRY:
            return [...state, action.entry];

        case EDIT_ENTRY:
            return state.map(stateItem => {
                if (stateItem.id === action.id) {
                    return { ...stateItem, ...action.newEntry };
                }
                return stateItem;
            });

        case DELETE_ENTRY:
            return state.filter(({ id }) => id !== action.id);

        default:
            return state;
    }
};

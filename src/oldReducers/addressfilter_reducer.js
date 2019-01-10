import { TEXT_FILTER } from '../constants/action_types';

const defaultState = {
    text: ''
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case TEXT_FILTER:
            return {
                text: action.newText
            };

        default:
            return state;
    }
};

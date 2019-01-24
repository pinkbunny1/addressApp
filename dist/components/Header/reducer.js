import { TEXT_FILTER } from './constants';
var defaultState = {
    text: '',
};
var filterReducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
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
//# sourceMappingURL=reducer.js.map
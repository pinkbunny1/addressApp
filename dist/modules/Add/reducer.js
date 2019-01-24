var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { CREATE_ENTRY } from './constants';
import { EDIT_ENTRY, DELETE_ENTRY } from './constants';
var addReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case CREATE_ENTRY:
            return state.concat([action.entry]);
        case EDIT_ENTRY:
            console.log('state in edit entry:', state);
            return state.map(function (entryItem) {
                return entryItem.id === action.id ? __assign({}, entryItem, action.newEntry) : entryItem;
            });
        case DELETE_ENTRY:
            return state.filter(function (_a) {
                var id = _a.id;
                return id !== action.id;
            });
        default:
            return state;
    }
};
export default addReducer;
//# sourceMappingURL=reducer.js.map
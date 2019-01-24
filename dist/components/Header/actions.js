import { TEXT_FILTER } from './constants';
export var text_filter = function (newText) {
    if (newText === void 0) { newText = ''; }
    return ({
        type: TEXT_FILTER,
        newText: newText,
    });
};
//# sourceMappingURL=actions.js.map
import { CREATE_ENTRY } from './constants';
import uuid from 'uuid';
export var createEntry = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.firstname, firstname = _c === void 0 ? '' : _c, _d = _b.lastname, lastname = _d === void 0 ? '' : _d;
    return ({
        type: CREATE_ENTRY,
        entry: {
            id: uuid(),
            firstname: firstname,
            lastname: lastname,
        },
    });
};
//# sourceMappingURL=actions.js.map
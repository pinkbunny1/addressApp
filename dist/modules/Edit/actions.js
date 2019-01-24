import { EDIT_ENTRY, DELETE_ENTRY } from './constants';
export var editEntry = function (id, newEntry) { return ({
    type: EDIT_ENTRY,
    id: id,
    newEntry: newEntry,
}); };
export var removeEntry = function (id) { return ({
    type: DELETE_ENTRY,
    id: id,
}); };
//# sourceMappingURL=actions.js.map
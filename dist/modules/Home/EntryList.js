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
import React from 'react';
import Entry from './Entry';
var EntryList = function (_a) {
    var entries = _a.entries;
    var entryList = entries.map(function (entry) {
        return React.createElement(Entry, __assign({ key: entry.id }, entry));
    });
    return React.createElement("div", { className: "addressList" }, entryList);
};
export default EntryList;
//# sourceMappingURL=EntryList.js.map
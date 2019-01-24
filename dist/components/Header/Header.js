import React from 'react';
import { Link } from 'react-router-dom';
var Header = function (_a) {
    var filter = _a.filter, textFilter = _a.textFilter;
    var onSearchHandle = function (e) {
        var text = e.target.value;
        textFilter(text);
    };
    return (React.createElement("header", { className: "addressList_header" },
        React.createElement("span", { className: "header__title" }, "Address Book"),
        React.createElement("span", null,
            React.createElement(Link, { className: "createNew", to: "/create", type: "button" },
                React.createElement("button", null, " + "))),
        React.createElement("span", null,
            React.createElement("input", { type: "search", placeholder: "Search", value: filter.text, onChange: onSearchHandle }))));
};
export default Header;
//# sourceMappingURL=Header.js.map
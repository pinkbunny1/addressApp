import React from 'react';
import { Link } from 'react-router-dom';
var Entry = function (_a) {
    var id = _a.id, firstname = _a.firstname, lastname = _a.lastname;
    return (React.createElement(Link, { className: "addressList__nameBox", to: "/edit/" + id, style: { textDecoration: 'none' } },
        React.createElement("h4", { className: "addressList__nameText" },
            firstname,
            " ",
            lastname)));
};
export default Entry;
//# sourceMappingURL=Entry.js.map
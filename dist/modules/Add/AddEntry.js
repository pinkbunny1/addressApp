import React from 'react';
import Form from '../../components/Form';
var AddEntry = function (props) {
    var createEntry = props.createEntry, history = props.history;
    return (React.createElement("div", { className: "addressContent" },
        React.createElement(Form, { onSubmit: createEntry, btnName: "Create", history: history })));
};
export default AddEntry;
//# sourceMappingURL=AddEntry.js.map
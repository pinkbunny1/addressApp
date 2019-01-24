import React from 'react';
import AddressForm from '../../components/Form';
var Edit = function (props) {
    var editEntry = props.editEntry, removeEntry = props.removeEntry, lastname = props.lastname, firstname = props.firstname, history = props.history;
    var id = props.match.params.id;
    var handleEditEntry = function (newEntry) {
        editEntry(id, newEntry);
    };
    var handleDeleteEntry = function () {
        removeEntry(id);
    };
    return (React.createElement("div", { className: "addressContent" },
        React.createElement(AddressForm, { onSubmit: handleEditEntry, onDelete: handleDeleteEntry, lastname: lastname, firstname: firstname, btnName: "Update", history: history })));
};
export default Edit;
//# sourceMappingURL=EditEntry.js.map
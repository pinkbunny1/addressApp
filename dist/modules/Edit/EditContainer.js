import { connect } from 'react-redux';
import EditEntry from './EditEntry';
import { editEntry, removeEntry } from './actions';
var mapStateToProps = function (state, ownProps) {
    // const { firstname, lastname } = [...state.add, ...state.edit].find(entry => entry.id === ownProps.match.params.id); // FF reducer
    console.log('1:', state);
    var _a = state.add.find(function (entry) { return entry.id === ownProps.match.params.id; }), firstname = _a.firstname, lastname = _a.lastname; // FF reducer (combined edit and add reducer)
    // const { firstname, lastname } = state.addressbook.find(entry => entry.id === ownProps.match.params.id); // oldReducer
    return {
        firstname: firstname,
        lastname: lastname,
    };
};
var mapDispatchToProps = function (dispatch) { return ({
    editEntry: function (id, newEntry) { return dispatch(editEntry(id, newEntry)); },
    removeEntry: function (id) { return dispatch(removeEntry(id)); },
}); };
export default connect(mapStateToProps, mapDispatchToProps)(EditEntry);
//# sourceMappingURL=EditContainer.js.map
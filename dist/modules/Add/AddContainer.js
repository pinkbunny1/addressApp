import { connect } from 'react-redux';
import AddEntry from './AddEntry';
import { createEntry } from './actions';
var mapDispatchToProps = function (dispatch) { return ({
    createEntry: function (newEntry) { return dispatch(createEntry(newEntry)); },
}); };
export default connect(undefined, mapDispatchToProps)(AddEntry);
//# sourceMappingURL=AddContainer.js.map
import { connect } from 'react-redux';
import getVisibleEntries from '../../selectors/addressBook';
import EntryList from './EntryList';
var mapStateToProps = function (state) { return (console.log('home', state),
    {
        // entries: getVisibleEntries([...state.add, ...state.edit], state.filter), // FF reducer
        entries: getVisibleEntries(state.add, state.filter),
    }); };
export default connect(mapStateToProps)(EntryList);
//# sourceMappingURL=HomeContainer.js.map
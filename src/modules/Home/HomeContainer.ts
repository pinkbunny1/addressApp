import { connect } from 'react-redux'
import getVisibleEntries from '../../selectors/addressBook'
import EntryList from './EntryList'
import Types from 'Types';



const mapStateToProps = (state:Types.RootState) => {
  return {
    entries: getVisibleEntries(state.add, state.filter),
  }
}

export default connect(mapStateToProps)(EntryList)

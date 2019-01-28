import { connect } from 'react-redux'
import getVisibleEntries from '../../selectors/addressBook'
import EntryList from './EntryList'

const mapStateToProps = state => {
  return {
    entries: getVisibleEntries(state.add, state.filter),
  }
}

export default connect(mapStateToProps)(EntryList)

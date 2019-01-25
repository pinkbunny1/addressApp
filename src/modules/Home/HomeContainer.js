import { connect } from 'react-redux'
import getVisibleEntries from '../../selectors/addressBook'
import EntryList from './EntryList'

const mapStateToProps = state => {
  const entries = state.add.map(entry => {
    if (entry.id === state.edit.id) {
      entry = state.edit
    }
    return entry
  })
  return {
    entries: getVisibleEntries(entries, state.filter),
  }
}

export default connect(mapStateToProps)(EntryList)

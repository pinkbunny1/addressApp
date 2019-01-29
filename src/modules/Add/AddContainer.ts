import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import AddEntry from './AddEntry'
import { createEntry, EntryData } from './actions'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createEntry: (newEntry:EntryData) => dispatch(createEntry(newEntry)),
})

export default connect(
  undefined,
  mapDispatchToProps
)(AddEntry)

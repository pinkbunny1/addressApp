import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import EditEntry from './EditEntry'
import { editEntry, removeEntry } from './actions'
import { bindActionCreators } from 'redux'
import { EntryData } from '../Add'
import Types from 'Types'

type OwnProps = {
  match: any
}

const mapStateToProps = (state:Types.RootState, ownProps:OwnProps) => {
  const { firstname, lastname } = state.add.find((entry:{id:string}) => entry.id === ownProps.match.params.id);
  return {
    firstname,
    lastname,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  editEntry: bindActionCreators(editEntry, dispatch),
  removeEntry: bindActionCreators(removeEntry, dispatch),
  dispatch,
})

// const mapDispatchToProps = dispatch => ({
// 	editEntry: (id, newEntry) => dispatch(editEntry(id, newEntry)),
// 	removeEntry: id => dispatch(removeEntry(id)),
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEntry)

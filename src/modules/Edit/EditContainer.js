import { connect } from 'react-redux'
import EditEntry from './EditEntry'
import { editEntry, removeEntry } from './actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state, ownProps) => {
  const { firstname, lastname } = state.add.find(entry => entry.id === ownProps.match.params.id);

  return {
    firstname,
    lastname,
  }
}

// const mapDispatchToProps = dispatch => ({
//   editEntry: bindActionCreators(editEntry, dispatch),
//   removeEntry: bindActionCreators(removeEntry, dispatch),
//   dispatch,
// })

const mapDispatchToProps = dispatch => ({
	editEntry: (id, newEntry) => dispatch(editEntry(id, newEntry)),
	removeEntry: id => dispatch(removeEntry(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEntry)

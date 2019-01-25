import { connect } from 'react-redux'
import EditEntry from './EditEntry'
import { editEntry, removeEntry } from './actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state, ownProps) => {
  // const { firstname, lastname } = [...state.add, ...state.edit].find(entry => entry.id === ownProps.match.params.id); // FF reducer
  console.log('1:', state)
  const { firstname, lastname } = state.add.find(
    entry => entry.id === ownProps.match.params.id
  ) // FF reducer (combined edit and add reducer)
  // const { firstname, lastname } = state.addressbook.find(entry => entry.id === ownProps.match.params.id); // oldReducer

  return {
    firstname,
    lastname,
  }
}

const mapDispatchToProps = dispatch => ({
  editEntry: bindActionCreators(editEntry, dispatch),
  removeEntry: bindActionCreators(removeEntry, dispatch),
  dispatch,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEntry)

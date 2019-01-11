import React from "react"
import AddressForm from "./addressForm"
import { connect } from "react-redux"
// import { editEntry, removeEntry } from '../actions/addressbook_actions';
import { editEntry, removeEntry } from "../modules/Add/actions"

const EditEntry = props => {
  const { editEntry, removeEntry, lastname, firstname, history } = props
  const { id } = props.match.params

  const handleEditEntry = newEntry => {
    editEntry(id, newEntry)
  }

  const handleDeleteEntry = () => {
    removeEntry(id)
  }

  return (
    <div className="addressContent">
      <AddressForm
        onSubmit={handleEditEntry}
        onDelete={handleDeleteEntry}
        lastname={lastname}
        firstname={firstname}
        btnName="Update"
        history={history}
      />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { firstname, lastname } = state.addressbook.find(
    entry => entry.id === ownProps.match.params.id
  )
  return {
    firstname,
    lastname
  }
}

const mapDispatchToProps = dispatch => ({
  editEntry: (id, newEntry) => dispatch(editEntry(id, newEntry)),
  removeEntry: id => dispatch(removeEntry(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEntry)

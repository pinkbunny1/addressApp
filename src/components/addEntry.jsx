import React from "react"
import AddressForm from "./addressForm"
import { connect } from "react-redux"
// import { createEntry } from '../actions/addressbook_actions';
import { createEntry } from "../modules/Add/actions"

const AddEntry = props => {
  const { createEntry, history } = props
  return (
    <div className="addressContent">
      <AddressForm onSubmit={createEntry} btnName="Create" history={history} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  createEntry: newEntry => dispatch(createEntry(newEntry))
})

export default connect(
  undefined,
  mapDispatchToProps
)(AddEntry)

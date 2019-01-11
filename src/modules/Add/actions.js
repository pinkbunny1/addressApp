import { CREATE_ENTRY, EDIT_ENTRY, DELETE_ENTRY } from "./constants"
import uuid from "uuid"

export const createEntry = ({ firstname = "", lastname = "" } = {}) => ({
  type: CREATE_ENTRY,
  entry: {
    id: uuid(),
    firstname,
    lastname
  }
})

export const editEntry = (id, newEntry) => {
  console.log("editEntry:", id, newEntry)
  return {
    type: EDIT_ENTRY,
    id,
    newEntry
  }
}

export const removeEntry = id => ({
  type: DELETE_ENTRY,
  id
})

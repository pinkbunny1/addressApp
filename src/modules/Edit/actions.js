import { EDIT_ENTRY, DELETE_ENTRY } from './constants'

export const editEntry = (id, newEntry) => {
  return dispatch => {
    dispatch({
      type: EDIT_ENTRY,
      payload: {
        id,
        newEntry,
      },
    })
  }
}

export const removeEntry = id => ({
  type: DELETE_ENTRY,
  id,
})

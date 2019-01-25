import { EDIT_ENTRY, DELETE_ENTRY } from './constants'

const editReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_ENTRY:
      return { id: action.payload.id, ...action.payload.newEntry }

    case DELETE_ENTRY:
      return state.filter(({ id }) => id !== action.id)

    default:
      return state
  }
}

export default editReducer

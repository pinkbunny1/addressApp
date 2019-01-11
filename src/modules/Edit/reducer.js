import { EDIT_ENTRY, DELETE_ENTRY } from "./constants"

const editReducer = (state = [], action) => {
  console.log("edit reducer called", state, action)
  switch (action.type) {
    case EDIT_ENTRY:
      console.log("state in edit entry:", state, action)
      const result = state.map(entryItem => {
        return entryItem.id === action.id
          ? { ...entryItem, ...action.newEntry }
          : entryItem
      })
      console.log("result:", result)
      return result

    case DELETE_ENTRY:
      return state.filter(({ id }) => id !== action.id)

    default:
      return state
  }
}

export default editReducer

import { CREATE_ENTRY, EDIT_ENTRY, DELETE_ENTRY } from "./constants"

const addReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_ENTRY:
      return [...state, action.entry]

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

export default addReducer

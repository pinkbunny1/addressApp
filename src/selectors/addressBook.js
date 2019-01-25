import { sortBy as _sortBy } from 'lodash'

const getVisibleEntries = (entries, { text }) => {
  let filteredEntries = entries.filter(({ firstname, lastname }) => {
    const textMatch =
      firstname.toLowerCase().includes(text.toLowerCase()) ||
      lastname.toLowerCase().includes(text.toLowerCase())
    return textMatch
  })
  return _sortBy(filteredEntries, ['lastname', 'firstname'])
}

export default getVisibleEntries

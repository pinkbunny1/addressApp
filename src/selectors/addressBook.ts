import { sortBy as _sortBy } from 'lodash'
import Types from 'Types'
import { EntryData } from '../modules/Add'

interface FilterState {
  text: string
}

const getVisibleEntries = (entries:EntryData[], { text }:FilterState) => {
  let filteredEntries = entries.filter(({ firstname, lastname }) => {
    const textMatch =
      firstname.toLowerCase().includes(text.toLowerCase()) ||
      lastname.toLowerCase().includes(text.toLowerCase())
    return textMatch
  })
  return _sortBy(filteredEntries, ['lastname', 'firstname'])
}

export default getVisibleEntries

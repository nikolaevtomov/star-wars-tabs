
import {
  LOAD_STARWARS_CHARACTERS,
  UPDATE_CHARACTERS_NAME
} from 'app/actions'

export const processDataWithId = items => {
  const result = {}
  items.forEach(item => {
    result[item.id] = {...item}
  })
  return result
}

const initialState = {}

export default function (state = initialState, { type, value }) {
  switch (type) {
    case LOAD_STARWARS_CHARACTERS:
      return processDataWithId(value)

    case UPDATE_CHARACTERS_NAME:
      return {
        ...state,
        [value.id]: {
          ...state[value.id],
          name: value.name
        }
      }

    default:
      return state
  }
}

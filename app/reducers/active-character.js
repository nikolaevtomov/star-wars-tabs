
import { UPDATE_ACTIVE_CHARACTER } from 'app/actions'

const initialState = 6543

export default function (state = initialState, { type, value }) {
  switch (type) {
    case UPDATE_ACTIVE_CHARACTER:
      return value

    default:
      return state
  }
}


import { TOGGLE_EDITABLE } from 'app/actions'
/*
 * This could be a part of a HOC to make it reusable
 * Ex: swithes selected key value pairs for similar purpose
 */
export const initialState = false

export default (state = initialState, { type, value }) => {
  switch (type) {
    case TOGGLE_EDITABLE:
      return !state

    default:
      return state
  }
}

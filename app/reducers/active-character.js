
import {
  UPDATE_ACTIVE_CHARACTER
} from 'app/actions'
/*
 * It is a simple reducer receives and action an places the value on stores
 * The initial value could have come from server response for inilialising the app
 * Or set as a static variable in a config file
 * This should not be hard-coded here
 */
const initialState = 6544

export default function (state = initialState, { type, value }) {
  switch (type) {
    case UPDATE_ACTIVE_CHARACTER:
      return value

    default:
      return state
  }
}


import {
  LOAD_STARWARS_CHARACTERS,
  UPDATE_CHARACTERS_NAME
} from 'app/actions'
/*
 * This reducer file listens to an action which triggered on application loadStarWarsCharacters
 * and places the data to the store.
 *
 * This is the places to avoid any logic or calculation.
 * It is place for single purpose: update the store values
 */

 /*
  * The data usualy comes from API and mostly it is not in a good form
  * Here I modified the truncture, gave its own id as a key
  * so when a specific character values need to be updated we can select it by its id
  */
export const processDataWithId = items => {
  const result = {}
  items.forEach(item => {
    result[item.id] = {...item}
  })
  return result
}
/*
 * forEach loop isa bit against the consept Functional Programming
 * but it is still a bit pure, at least does not have side effects
 */

/*
 * This reducer also mutates the data
 * I would use Immutable JS for handling the state update,
 * however, for this project, implementing making Immutable JS work with forms
 * and routes a bit time consumung as I didnt have it as part of the boilerplate
 */
const initialState = {}

export default function (state = initialState, { type, value }) {
  switch (type) {
    case LOAD_STARWARS_CHARACTERS:
      return processDataWithId(value)
    /*
     * This is listening to an action call on input value change
     * It could updated the state using Immutable JS
     */
    case UPDATE_CHARACTERS_NAME:
      // return console.log(value)
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

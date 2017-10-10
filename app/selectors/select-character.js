import { createSelector } from 'reselect'
/*
 * Here are two selectors that reached directly to the state
 * They can be importeed and reusable across the application
 */
export const selectCharacters = (state) => Object.keys(state.starWarsCharacters).map(key => state.starWarsCharacters[key])
export const activeChar = (state) => state.activeCharacter
/*
 * This is a composed function uses two selectors to get filtered result
 * The good thing is that it used reselect library and it is good for memoization
 */
export const oneOfCharacter = createSelector(
  [ selectCharacters, activeChar ],
  (characters, id) => {
    return Object.keys(characters)
      .map(key => characters[key])
      .find(item => item.id === id)
  }
)

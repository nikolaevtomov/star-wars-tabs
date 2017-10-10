import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import starWarsCharacters from 'app/reducers/star-wars-characters'
import isEditable from 'app/reducers/is-editable'
import activeCharacter from 'app/reducers/active-character'

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  starWarsCharacters,
  isEditable,
  activeCharacter
})

export default rootReducer

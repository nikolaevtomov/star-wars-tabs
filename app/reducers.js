import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form/immutable'

import entities from 'app/reducers/entities'
import isEditable from 'app/reducers/is-editable'
import active from 'app/reducers/active'

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  entities,
  isEditable,
  active
})

export default rootReducer

import Immutable from 'immutable'

import { LOAD_ENTITIES, UPDATE_ENTITY } from 'app/actions'

const initialState = new Immutable.Map()

export default function (state = initialState, { type, value }) {
  switch (type) {
    case LOAD_ENTITIES:
      return state.merge(value.map(item => [item.id, new Immutable.Map({...item})]))

    case UPDATE_ENTITY:
      return state.setIn([value.id, 'name'], value.name)

    default:
      return state
  }
}

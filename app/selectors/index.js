import { createSelector } from 'reselect'

export const allEntities = state => state.get('entities')
export const activeEntity = state => state.get('active')

export const getEntityById = createSelector(
  [ allEntities, activeEntity ],
  (entity, id) => entity.get(id)
)

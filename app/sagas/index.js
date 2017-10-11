import { takeLatest, fork, put } from 'redux-saga/effects'

import {
  APP_LOADING_STARTED,
  appLoadingSucceed,
  appLoadingFailed,
  loadEntities
} from 'app/actions'

import characters from 'app/data/characters'

export function * initializeAppState () {
  try {
    yield put(appLoadingSucceed())
    yield put(loadEntities(characters))
  } catch (error) {
    yield put(appLoadingFailed())
  }
}

export function * watchInitializeAppState () {
  yield takeLatest(APP_LOADING_STARTED, initializeAppState)
}

export default function * startForeman () {
  yield fork(watchInitializeAppState)
}

import { takeLatest, fork, put } from 'redux-saga/effects'

import {
  APP_LOADING_STARTED,
  appLoadingSucceed,
  appLoadingFailed,
  loadStarWarsCharacters
} from 'app/actions'

import characters from 'app/data/characters'
/*
 * I have not build most of the files for this task but I always maintain a bolilarplate
 *
 * Redux-saga is one of my favorite library
 * Sagas are great for:
 * business-logic, decision making, branching actions, action chains,
 * trigering and receiving actions
 * This file triggers the tasks for application inilialising
 */
export function * initializeAppState () {
  try {
    yield put(appLoadingSucceed())
    /*
     * Here I am assuming the data came as a response to a promise call
     * and passed to the action as a value.
     * It carries the data to the store
     */
    yield put(loadStarWarsCharacters(characters))
  } catch (error) {
    yield put(appLoadingFailed())
  }
}

export function * watchInitializeAppState () {
  yield takeLatest(APP_LOADING_STARTED, initializeAppState)
}

export default function * startForeman () {
  yield fork(watchInitializeAppState)
  /*
   * Here we could add another watcher for other saga files
   */
}


import { typeValueAction } from 'app/utils'
/*
 * App actions
 */
export const APP_LOADING = 'APP_LOADING'
export const appLoading = typeValueAction(APP_LOADING)

export const APP_LOADING_STARTED = 'APP_LOADING_STARTED'
export const appLoadingStarted = typeValueAction(APP_LOADING_STARTED)

export const APP_LOADING_FAILED = 'APP_LOADING_FAILED'
export const appLoadingFailed = typeValueAction(APP_LOADING_FAILED)

export const APP_LOADING_SUCCEED = 'APP_LOADING_SUCCEED'
export const appLoadingSucceed = typeValueAction(APP_LOADING_SUCCEED)
/*
 * UI actions
 */
export const LOAD_STARWARS_CHARACTERS = 'LOAD_STARWARS_CHARACTERS'
export const loadStarWarsCharacters = typeValueAction(LOAD_STARWARS_CHARACTERS)

export const TOGGLE_EDITABLE = 'TOGGLE_EDITABLE'
export const toggleEditable = typeValueAction(TOGGLE_EDITABLE)

export const UPDATE_ACTIVE_CHARACTER = 'UPDATE_ACTIVE_CHARACTER'
export const updateActiveCharacter = typeValueAction(UPDATE_ACTIVE_CHARACTER)

export const UPDATE_CHARACTERS_NAME = 'UPDATE_CHARACTERS_NAME'
export const updateCharactersName = typeValueAction(UPDATE_CHARACTERS_NAME)

import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import { SIGNUP, signUpReducer, userSignSaga } from '@/modules/userSign/SignUpModule'

export const rootReducer = combineReducers({
  [SIGNUP]: signUpReducer,
})

export function* rootSaga() {
  yield all([
    ...userSignSaga,
  ])
}

export type IRootState = ReturnType<typeof rootReducer>
import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import { SIGNUP, userReducer, userSignSaga } from '@/modules/user/UserModule'
import { SESSION_ID, sessionReducer } from '@/modules/user/SessionModule'

export const rootReducer = combineReducers({
  [SIGNUP]: userReducer,
  [SESSION_ID]: sessionReducer,
})

export function* rootSaga() {
  yield all([...userSignSaga])
}

export type IRootState = ReturnType<typeof rootReducer>

import { combineReducers } from 'redux'
//import { all } from 'redux-saga/effects'

import { SIGNUP, signUpReducer } from '@/modules/user_sign/SignUpModule'

export const rootReducer = combineReducers({
  [SIGNUP]: signUpReducer,
})
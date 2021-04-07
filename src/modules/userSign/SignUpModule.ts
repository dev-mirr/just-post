import { handleActions, Action } from 'redux-actions'
import { takeLatest } from 'redux-saga/effects'
import { createPostAction } from '@/utils/actionUtils'
import { fetchCreateUser } from '@/api/user-sign/UserSign'
import { IUserInfo } from '@/domains/userSign/UserDomain'

// interface
interface ISignInState {
  id: string
  name: string
  email: string
  password: string
}

const initialState = {
  id: '',
  name: '',
  email: '',
  password: '',
}

// action types
export const SIGNUP = `SIGNUP`
export const SIGNIN = 'SIGNIN'

// action creators
export const signUpAsync = createPostAction(SIGNUP)
export const signInAsync = createPostAction(SIGNIN)

// action functions
function* signUp(action: Action<IUserInfo>) {
  try {
    const result = fetchCreateUser({
      data: action.payload
    })
  } catch (e) {
    alert('error!!')
    console.log(e)
  }
}

function * signIn(action: Action<IUserInfo>) {
  try {

  } catch (e) {

  }
}

// reducer
const reducer = {
  [signUpAsync.SUCCESS]: (state: ISignInState, actions: Action<any>) => {
    return {
      ...state,
    }
  },
  [signUpAsync.ERROR]: (state: ISignInState, actions: Action<any>) => {
    return {
      ...state,
    }
  },
}

// selector
export const signUpSelector = {

}

export const signUpReducer = handleActions(reducer, initialState)
export const userSignSaga = [
  takeLatest(signUpAsync.POST, signUp),
  takeLatest(signInAsync.POST, signIn)
]
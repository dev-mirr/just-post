import { handleActions, Action } from 'redux-actions'
import { call, takeLatest } from 'redux-saga/effects'
import { createPostAction } from '@/utils/actionUtils'
import { fetchCreateUser, fetchSignIn } from '@/api/user/UserApi'
import {
  ISignInRequest,
  ISignInResponse,
  ISignUpRequest,
  IUserInfo,
  IUserSignIn,
} from '@/domains/UserDomain'
import { addToken } from '@/api'
import { push } from '@/utils/historyUtils'
import { USER_ROUTES } from '@/domains/common/CommonDomain'

/* interface */
interface ISignInState {
  userId: string
  name: string
  email: string
  password: string
}

const initialState = {
  userId: '',
  name: '',
  email: '',
  password: '',
}

/* action types */
export const SIGNUP = `SIGNUP`
export const SIGNIN = 'SIGNIN'

/* action creators */
export const signUpAsync = createPostAction(SIGNUP)
export const signInAsync = createPostAction(SIGNIN)

/* saga functions */
function* signUp(action: Action<IUserInfo>) {
  const payload: ISignUpRequest = {
    data: {
      ...action.payload,
    },
  }
  try {
    yield call(fetchCreateUser, payload)

    alert(`sign up success!! \nPlease sign in`)

    push(USER_ROUTES.SIGN_IN)
  } catch (e) {
    alert(`sign up error`)

    console.log(e)
  }
}

function* signIn(action: Action<IUserSignIn>) {
  //const sagaCall: any = Effects.call
  const params: ISignInRequest = {
    ...action.payload,
  }

  try {
    const response: ISignInResponse = yield call(fetchSignIn, params)

    addToken(response.sessionId)
    // 로그인 페이지 이동 기능 추가해야함
  } catch (e) {
    alert(`sign in error`)

    console.log(e)
  }
}

/* reducer */
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

/* selector */
export const signUpSelector = {}

export const userReducer = handleActions(reducer, initialState)
export const userSignSaga = [
  takeLatest(signUpAsync.POST, signUp),
  takeLatest(signInAsync.POST, signIn),
]

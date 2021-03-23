import { handleActions, createAction, Action } from 'redux-actions'

interface ISignInState {
  id: string
  email: string
  password: string
}

const initialState = {
  id: '',
  email: '',
  password: '',
}

// action types
export const SIGNUP = `SignUp`

// action
export const signUpAction = createAction(SIGNUP)

export const reducer = {
  [SIGNUP]: (state: ISignInState, actions: Action<any>) => {
    return {
      ...state,
    }
  },
}

export const signUpSelector= {

}

export const signUpReducer = handleActions(reducer, initialState)
import { Action, createAction, handleActions } from 'redux-actions'
import { ISession } from '@/domains/UserDomain'
import { IRootState } from '..'
import { oc } from 'ts-optchain'

interface ISessionState extends ISession {
}

const initialState: ISessionState = {
  sessionId: ''
}

export const SESSION_ID = 'SessionId'

export const sessionActions = {
  setId: createAction<ISession>(SESSION_ID),
}

export const sessionSelector = {
  sessionId: (state: IRootState) =>oc(state[SESSION_ID]).sessionId
}

const reducer = {
  [SESSION_ID]: (state: ISessionState, action: Action<any>) => ({
    ...state,
    sessionId: action.payload
  })
}

export const sessionReducer = handleActions(reducer, initialState)
import { Action, ActionFunctionAny, createAction } from 'redux-actions'
import { put, call, CallEffect } from 'redux-saga/effects'
import { oc } from 'ts-optchain'

interface IPostAction {
  TYPE: string
  POST: string
  REQUEST: string
  SUCCESS: string
  ERROR: string
  post: ActionFunctionAny<Action<any>>
  request: ActionFunctionAny<Action<any>>
  success: ActionFunctionAny<Action<any>>
  error: ActionFunctionAny<Action<any>>
}

export const createPostAction = <T>(type: string): IPostAction => {
  const POST = `${type}/POST`
  const REQUEST = `${type}/REQUEST`
  const SUCCESS = `${type}/SUCCESS`
  const ERROR = `${type}/ERROR`

  return {
    TYPE: type,
    POST,
    REQUEST,
    SUCCESS,
    ERROR,
    post: createAction<T>(POST),
    request: createAction(REQUEST),
    success: createAction(SUCCESS),
    error: createAction(ERROR),
  }
}

export function createSaga<T>(actions: IPostAction, callback: any) {
  return function* (action: Action<T>) {
    const payload = oc(action).payload()

    try {
      yield put(actions.request(payload))
      const result: CallEffect<any> = yield call(callback, payload)
      yield put(actions.success(result))
    } catch (e) {
      yield put(actions.error(e))
    }
  }
}

import { Action, ActionFunctionAny, createAction } from "redux-actions";

interface IAction {
  TYPE: string
  REQUEST: string
  SUCCESS: string
  FAILURE: string
  request: ActionFunctionAny<Action<any>>
  success: ActionFunctionAny<Action<any>>
  failure: ActionFunctionAny<Action<any>>
}

export function createActionEx<T>(type: string): IAction {
  const REQUEST = `${type}/REQUEST`
  const SUCCESS = `${type}/SUCCESS`
  const FAILURE = `${type}/FAILURE`

  return {
    TYPE: type,
    REQUEST,
    SUCCESS,
    FAILURE,
    request: createAction<T>(REQUEST),
    success: createAction(SUCCESS),
    failure: createAction(FAILURE),
  }
}
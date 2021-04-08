import * as Saga from 'redux-saga/effects'

export const call = <T>(fn: Promise<any>, data: any): any => {
  const sagaCall: any = Saga.call

  return sagaCall(fn, data)
}
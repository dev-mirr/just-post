export interface IDefaultResponse {
  code: number
  data: any
  message: string
}

export interface IServerResponse<T> {
  code: number
  data: T
  message: string
}


export enum ROOT {
  USER = '/auth',
}

export const USER_ROUTES = {
  ROOT: `${ROOT.USER}`,
  SIGN_UP: `${ROOT.USER}/signup`,
  SIGN_IN: `${ROOT.USER}/signin`,
}
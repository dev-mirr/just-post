export interface IUserInfo {
  userId: string
  name: string
  email: string
  password: string
}

export interface IUserSignIn {
  email: string
  password: string
}

export interface ISession {
  sessionId: string
}

export interface ISignUpRequest {
  data: IUserInfo
}

export interface ISignUpResponse {
  data: any
}

export interface ISignInRequest extends IUserSignIn {
  //data: IUserSignIn
}

export interface ISignInResponse extends ISession {}

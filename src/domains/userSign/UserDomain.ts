export interface IUserInfo {
  id: string
  name: string
  email: string
  password: string
}

export interface ISignInUser {
  email: string
  password: string
}

export interface ISignUpRequest {
  data: IUserInfo
}

export interface ISignUpResponse {
  code: number
  data: any
  message: string
}

export interface ISignInRequest {
  data: ISignInUser
}
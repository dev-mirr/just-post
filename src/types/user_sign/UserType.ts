export interface IUserInfo {
  id: string
  email: string
  password: string
}

export interface ISignUpRequest {
  data: IUserInfo
}

export interface ISignUpResponse {
  code: number
  data: any
}
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

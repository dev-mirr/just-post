import { postApi } from '@/api'
import {
  ISignUpRequest,
  ISignUpResponse,
  ISignInRequest,
  ISignInResponse,
} from '@/domains/UserDomain'

import { IDefaultResponse } from '@/domains/common/CommonDomain'

const USER_URL = '/users'
const AUTH_URL = '/auth'

export const fetchCreateUser = (
  data: ISignUpRequest
): Promise<IDefaultResponse> => {
  return postApi.post(`${USER_URL}/register`, data)
}

export const fetchSignIn = (
  data: ISignInRequest
): Promise<ISignInResponse> => {
  return postApi.post(`${AUTH_URL}/login`, data)
}
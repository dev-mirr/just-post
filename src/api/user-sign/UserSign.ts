import { postApi } from '@/api'
import { ISignUpRequest, ISignInRequest } from '@/domains/userSign/UserDomain'

export function fetchCreateUser(
  data: ISignUpRequest
) {
  return postApi.post('/users/register', data)
}

export function fetchLoginUser(
  data: ISignInRequest
) {
  return postApi.post('/users/login')
}
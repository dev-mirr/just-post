import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { IServerResponse } from '@/domains/common/CommonDomain'
import { STATUS_CODE } from '@/domains/common/apiCode'

const testURL = 'http://localhost:3309'
const TIMEOUT = 100000
const V1 = 'v1'

export const axiosInstance = axios.create({
  baseURL: testURL,
  timeout: TIMEOUT,
})

const toApi = (url: string) => `${V1}${url}`

const postApi = {
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.post(toApi(url), data, config)
  },
}

export const addToken = (token: string) => {
  axiosInstance.defaults.headers.authorization = token
}

export const init = () => {
  const handleRequest = (config: AxiosRequestConfig) => {
  }

  const handleResponse = <T>(response: AxiosResponse<IServerResponse<T>>) => {
    if (response.data && response.data.code !== STATUS_CODE.OK) {
      throw (response)
    }

    if (response.headers.authorization) {
      addToken(response.headers.authorization)
    }

    console.log('= = => handleResponse ')
    console.log(response)

    return response.data.data
  }

  const handleError = (e: AxiosError) => {
    throw (e)
  }

  axiosInstance.interceptors.response.use(handleResponse, handleError)
}

export {
  postApi
}
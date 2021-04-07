import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const testURL = 'http://localhost:3309'
const TIMEOUT = 100000
const V1 = 'v1'

export const axiosInstance = axios.create({
  baseURL: testURL,
  timeout: TIMEOUT,
})

//const toApi = (url: string) => `${testURL}/${url}`
const toApi = (url: string) => `${V1}${url}`

const postApi = {
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  console.log(`= = => ${toApi(url)}`)

    return axiosInstance.post(toApi(url), data, config)
  },
}

export {
  postApi
}
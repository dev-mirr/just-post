import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const testURL = 'localhost:3006'
const TIMEOUT = 100000

export const axiosInstance = axios.create({
  baseURL: testURL,
  timeout: TIMEOUT,
})

const postApi = {
  post<t>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.post(`${testURL}/`)
  },
}

export {
  postApi
}
import { postApi } from '@/api'
import {
  IFeedCreateRequest,
  IFeedCreateResponse,
  IFeedRemoveRequest,
  IFeedRemoveResponse,
} from '@/domains/FeedDomain'

const FEED_URL = '/feed'

export const fetchCreateFeed = (
  data: IFeedCreateRequest
): IFeedCreateResponse => {
  return postApi.post(`${FEED_URL}/create`, data)
}

export const fetchRemoveFeed = (
  data: IFeedRemoveRequest
): IFeedRemoveResponse => {
  return postApi.post(`${FEED_URL}/remove`, data)
}
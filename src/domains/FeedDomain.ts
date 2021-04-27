export interface IFeedInfo {
  id: number
  displayName: string
  feed: string
  date: string
}

export interface IFeedCreateRequest extends IFeedInfo{

}

export interface IFeedCreateResponse{
  code: number
  message: string
}

export interface IFeedRemoveRequest {
  id: number
}

export interface IFeedRemoveResponse {
  code: number
  message: string
}

export interface IFeedList {
  feeds: IFeedInfo[]
}
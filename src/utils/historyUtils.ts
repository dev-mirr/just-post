import { createBrowserHistory } from 'history'

const browserHistory = createBrowserHistory()

export const push = (url: string) => {
  browserHistory.push(url)
}

export default browserHistory
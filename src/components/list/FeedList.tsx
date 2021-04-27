import React from 'react'
import { FeedItem } from './FeedItem'
import { FeedMain } from './FeedMain'
import { FeedWrapper } from './FeedWrapper'

interface IFeedListProps {
}

const list = [
  {
    displayName: 'tester1',
    content: 'content',
    date: '2021-02-10'
  },
  {
    displayName: 'tester2',
    content: 'content1',
    date: '2021-02-11'
  },
]

export const FeedList = (props: IFeedListProps) => {
  return (
    <FeedMain>
      <FeedWrapper>
        { list.map((item) => {
          <FeedItem
            displayName={item.displayName}
            content={item.content}
            date={item.date}
          />
        })}
      </FeedWrapper>
    </FeedMain>
  )
}
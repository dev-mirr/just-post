import React from 'react'
import { Image } from './Image'
import { FeedDate } from './FeedDate'

interface IFeedItemProps {
  displayName: string
  imgUrl?: string
  content: string
  date: string
}

export const FeedItem = (props: IFeedItemProps) => {
  return (
    <div className="card mb-4 wow fadeIn">
      { props.imgUrl ?? <Image imgUrl={props.imgUrl}/> }
      <strong>{props.displayName}</strong>
      <p>
        <FeedDate date={props.date}></FeedDate>
      </p>
      <p>{props.content}</p>
    </div>
  )
}
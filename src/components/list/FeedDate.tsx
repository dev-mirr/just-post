import React from 'react'

interface IFeedDateProps {
  date: string
}

export const FeedDate = (props: IFeedDateProps) => {
  return (
    <strong>
      <i className="far fa-clock"/>
      {props.date}
    </strong>
  )
}
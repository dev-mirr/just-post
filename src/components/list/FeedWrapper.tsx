import React, { ReactNode } from 'react'

interface IFeedWrappersProps {
  children: ReactNode
}

export const FeedWrapper = (props: IFeedWrapperProps) => {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}
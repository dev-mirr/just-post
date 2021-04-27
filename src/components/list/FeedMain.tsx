import React, { ReactNode } from 'react'

interface IFeedMainProps {
  children: ReactNode
}

export const FeedMain = (props: IFeedMainProps) => {
  return (
    <main className="mt-5 pt-5">
      {props.children}
    </main>
  )
}
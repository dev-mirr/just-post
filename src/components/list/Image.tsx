import React from 'react'

interface IImageProps {
  imgUrl: string
}

export const Image = (props: IImageProps) => {
  return <img src={props.imgUrl} />
}
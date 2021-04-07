import React from 'react'

interface IFormHeader {
  title: string,
}

export const FormHeader = (props: IFormHeader) => {
  const { title } = props

  return <h2 id="headerTitle">{props.title}</h2>
}
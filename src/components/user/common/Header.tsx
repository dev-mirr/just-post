import React from 'react'

interface IFormHeader {
  title: string
}

export const FormHeader = (props: IFormHeader) => {
  return <h2 id="headerTitle">{props.title}</h2>
}

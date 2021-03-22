import React from 'react'

interface IFormButton {
  text: string,
}

export const FormButton = (props: IFormButton) => {
  return (
    <div className="row">
      <button>{props.text}</button>
    </div>
  )
}
import React, { MouseEventHandler } from 'react'

interface IFormButton {
  text: string,
  onClick: MouseEventHandler<HTMLButtonElement>,
}

export const FormButton = (props: IFormButton) => {

  return (
    <div className="row">
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
}
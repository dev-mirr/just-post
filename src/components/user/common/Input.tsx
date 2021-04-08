import React, { ChangeEventHandler } from 'react'

interface IFormInput {
  type: string,
  placeholder: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
}

export const FormInput = (props: IFormInput) => {
  return (
    <div className="row">
      <input {...props} />
    </div>
  )
}
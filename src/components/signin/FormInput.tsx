import React from 'react'

interface IFormInput {
  type: string,
  placeholder: string,
  desc: string,
}

export const FormInput = (props: IFormInput) => {
  const { type, desc, placeholder } = props
  return (
    <div className="row">
      <label>{desc}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}
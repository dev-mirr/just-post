import React from 'react'

import { FormInput } from './FormInput'
import { FormButton } from './FormButton'

export const Form = () => {
  return (
    <div>
      <FormInput
        type='text'
        placeholder='Enter your Email'
        desc='Email'
      />
      <FormInput
        type='Password'
        placeholder='Enter your Password'
        desc='Password'
      />
      <FormButton
        text='Log in'
      />
    </div>
  )
}
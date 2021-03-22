import React from 'react'

import { FormHeader } from './FormHeader'
import { Form } from './Form'
import { OtherSignIn } from './OtherSignIn'

export const LoginForm = () => {
  return (
    <div id="loginform">
      <FormHeader title='Login'/>
      <Form />
      <OtherSignIn />
    </div>
  )
}
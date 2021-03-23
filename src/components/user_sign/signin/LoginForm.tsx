import React, { ChangeEvent, MouseEvent, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import { FormHeader } from '@/components/user_sign/common/FormHeader'
//import { Form } from '@/components/user_sign/common/Form'
import { OtherSignIn } from './OtherSignIn'
import { FormInput } from '@/components/user_sign/common/FormInput'
import { FormButton } from '@/components/user_sign/common/FormButton'

import { isEmailFormat } from '@/utils/userUtils'

export const LoginForm = () => {
//  const handleSubmit = (id: string, password: string) => {
//    console.log(`= = => is Email format: ${isEmailFormat(id)}`)
//  }

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const handleIdChange = useCallback(
  (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setId(value)
  }, [setId])

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setPassword(value)
  }, [setPassword])

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    if (!id) {
      console.log('plase enter email')

      return
    }
    else if (!password) {
      console.log('plase enter password')

      return
    }

  }

  return (
    <div id="loginform">
      <FormHeader title="Login"/>
      <FormInput
        type='text'
        placeholder='Enter your Email'
        onChange={handleIdChange}
      />
      <FormInput
        type='Password'
        placeholder='Enter your Password'
        onChange={handlePasswordChange}
      />
      <FormButton
        text='Sign in'
        onClick={handleSubmit}
      />
      <Link to="/sign-up">
        <div id="sign_up_link">sign up</div>
      </Link>
      <OtherSignIn />
    </div>
  )
}
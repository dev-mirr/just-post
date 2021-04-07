import React, { ChangeEvent, MouseEvent, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import { FormHeader } from '@/components/userSign/common/Header'
import { OtherSignIn } from './OtherSignIn'
import { FormInput } from '@/components/userSign/common/Input'
import { FormButton } from '@/components/userSign/common/Button'

//import { isEmailFormat } from '@/utils/userUtils'

export const SignInForm = () => {
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
    // invalid inputs
    if (!id) {
      return
    }
    else if (!password) {
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
      <div id="sign_up_link">
        <Link to="/sign-up">
          sign up
        </Link>
      </div>
      <OtherSignIn />
    </div>
  )
}
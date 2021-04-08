import React, { ChangeEvent, MouseEvent, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { FormHeader } from '@/components/user/common/Header'
import { OtherSignIn } from './OtherSignIn'
import { FormInput } from '@/components/user/common/Input'
import { FormButton } from '@/components/user/common/Button'

import { signInAsync } from '@/modules/user/UserModule'
import { USER_ROUTES } from '@/domains/common/CommonDomain'

export const SignInForm = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleIdChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setEmail(value)
    },
    [setEmail],
  )

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setPassword(value)
    },
    [setPassword],
  )

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    // invalid inputs
    if (!email || !password) {
      return
    }

    dispatch(signInAsync.post({ email, password }))
  }

  return (
    <div id="loginform">
      <FormHeader title="Login" />
      <FormInput type="text" placeholder="Enter your Email" onChange={handleIdChange} />
      <FormInput
        type="Password"
        placeholder="Enter your Password"
        onChange={handlePasswordChange}
      />
      <FormButton text="Sign in" onClick={handleSubmit} />
      <div id="sign_up_link">
        <Link to={USER_ROUTES.SIGN_UP}>sign up</Link>
      </div>
      <OtherSignIn />
    </div>
  )
}

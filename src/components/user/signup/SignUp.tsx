import React, { ChangeEvent, MouseEvent, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { FormHeader } from '@/components/user/common/Header'
import { FormInput } from '@/components/user/common/Input'
import { FormButton } from '@/components/user/common/Button'
//import { OtherSignIn } from '@/components/userSign/signin/OtherSignIn'

import { signUpAsync } from '@/modules/user/UserModule'
import { isEmailFormat } from '@/utils/commonUtils'

export const SignUp = () => {
  const dispatch = useDispatch()
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeId = useCallback(
  (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setId(value)
  }, [setId])

  const onChangeName = useCallback(
  (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setName(value)
  }, [setId])


  const onChangeEmail = useCallback(
  (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setEmail(value)
  }, [setEmail])

  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setPassword(value)
  }, [setPassword])

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    if (!id || !password || !name || !email) {
      console.log('plase enter email')

      return
    }

    if (!isEmailFormat(email))
      return

    dispatch(signUpAsync.post({
      userId: id,
      name: name,
      email: email,
      password: password
    }))
  }

  return (
    <div id="loginform">
      <FormHeader title="Sign up" />
      <FormInput
        type="text"
        placeholder="ID"
        onChange={onChangeId}
      />
      <FormInput
        type="text"
        placeholder="Name"
        onChange={onChangeName}
      />
      <FormInput
        type="text"
        placeholder="Email"
        onChange={onChangeEmail}
      />
      <FormInput
        type="Password"
        placeholder="Password"
        onChange={onChangePassword}
      />
      <FormButton
        text="Sign up"
        onClick={onSubmit}
      />
        <div id="sign_up_link">
          <Link to="sign-in">
            sign in
          </Link>
        </div>
    </div>
  )
}
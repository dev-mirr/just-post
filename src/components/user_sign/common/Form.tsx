import React, { ChangeEvent, MouseEvent, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import { FormInput } from '@/components/user_sign/common/FormInput'
import { FormButton } from '@/components/user_sign/common/FormButton'

interface IForm {
onSubmit: (id: string, password: string) => void
}

export const Form = (props: IForm) => {
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

    props.onSubmit(id, password)
  }

  return (
    <div>
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
    </div>
  )
}
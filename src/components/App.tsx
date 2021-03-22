import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import SignInPage from '@/components/user_sign/signin/SignInPage'
import { SignupPage } from '@/components/user_sign/signup/SignUpPage'

export const App = () => {
  return (
    <Switch>
      <Route path="/sign-in" component={SignInPage} />
      <Route path="/sign-up" component={SignupPage} />
      <Redirect from="*" to="/sign-in" />
    </Switch>
  )
}
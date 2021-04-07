import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { SignIn } from '@/components/userSign/signin/SignIn'
import { SignUp } from '@/components/userSign/signup/SignUp'

export const App = () => {
  return (
    <Switch>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Redirect from="*" to="/sign-in" />
    </Switch>
  )
}
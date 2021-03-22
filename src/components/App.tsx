import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import SignInPage from '@/components/signin/SignInPage'

export const App = () => {
  return (
    <Switch>
      <Route path="/sign-in" component={SignInPage} />
      <Redirect from="*" to="/sign-in" />
    </Switch>
  )
}
import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { SignIn } from '@/components/user/signin/SignIn'
import { SignUp } from '@/components/user/signup/SignUp'

import { USER_ROUTES } from '@/domains/common/CommonDomain'

export const App = () => {
  return (
    <Switch>
      <Route path={USER_ROUTES.SIGN_IN} component={SignIn} />
      <Route path={USER_ROUTES.SIGN_UP} component={SignUp} />
      <Route path='/' component={SignIn} />
    </Switch>
  )
}

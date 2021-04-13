import React from 'react'
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom'

import { USER_ROUTES } from '@/domains/common/CommonDomain'

import { SignIn } from './signin/SignIn'
import { SignUp } from './signup/SignUp'
import '@/resources/css/user_style.css'

export default withRouter((routerProps: RouteComponentProps) => {
  console.log('= = => 여기도')

  return (
    <>
      <Switch location={routerProps.location}>
        <Route path={USER_ROUTES.SIGN_IN} component={SignIn} />
        <Route path={USER_ROUTES.SIGN_UP} component={SignUp} />
        <Route exact path={USER_ROUTES.ROOT} component={SignIn} />
      </Switch>
    </>
  )
})
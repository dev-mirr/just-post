import React from 'react'
import loadable from '@loadable/component'
import { Route, Redirect, Switch } from 'react-router-dom'

import { ROOT, USER_ROUTES } from '@/domains/common/CommonDomain'

export const App = () => {

  return (
    <>
      <Switch>
        <Route path={ROOT.USER} component={loadable(() => 
          import('./user'),
        )} />
        <Redirect path='/' to={ROOT.USER} />
      </Switch>
    </>
  )
}

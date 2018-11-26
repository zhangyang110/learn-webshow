import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import Container from './routes/Container'
// import App from 'routes/app'

const { ConnectedRouter } = routerRedux

const Routers = function ({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  })
  const routes = [
    {
      path: '/dashboard',
      models: () => [import('./models/dashboard')],
      component: () => import('./routes/dashboard/'),
    },

    {
      path: '/search',
      models: () => [import('./models/search')],
      component: () => import('./routes/search/'),
    },
    // {
    //   path: '/kinds',
    //   models: () => [import('./models/kinds')],
    //   component: () => import('./routes/kinds/'),
    // },
    {
      path: '/kinds/:parent_id/:object_id',
      models: () => [import('./models/commenKinds')],
      component: () => import('./routes/commenKinds/'),
    },
    {
      path: '/detail/:id',
      models: () => [import('./models/detail')],
      component: () => import('./routes/detail/'),
    },
    {
      path: '/limitedFree/:id',
      models: () => [import('./models/limited')],
      component: () => import('./routes/limitedFree/'),
    },
    {
      path: '/specialTwo/:id',
      models: () => [import('./models/specialTwo')],
      component: () => import('./routes/specialTwo/'),
    },
    {
      path: '/specialOne/:id',
      models: () => [import('./models/specialOne')],
      component: () => import('./routes/specialOne/'),
    },
    {
      path: '/playHistory',
      models: () => [import('./models/playHistory')],
      component: () => import('./routes/playHistory/'),
    },
    {
      path: '/collects',
      models: () => [import('./models/collects')],
      component: () => import('./routes/collects/'),
    },
    {
      path: '/player/:id/:episode',
      models: () => [import('./models/videoPlay')],
      component: () => import('./routes/videoPlay/'),
    },

    // {
    //   path: '/login',
    //   models: () => [import('./models/login')],
    //   component: () => import('./routes/login/'),
    // },

    {
      path: '/education',
      models: () => [import('./models/eduHome')],
      component: () => import('./routes/eduHome/'),
    },
    {
      path: '/cartoon',
      models: () => [import('./models/cartoonHome')],
      component: () => import('./routes/cartoonHome/'),
    },
    {
      path: '/webVideo/:seriesId/:episode',
      models: () => [import('./models/webVideo')],
      component: () => import('./routes/webVideo/'),
    },
  ]
  var actionRouter = {}

  if (window.globalOpts.app === '少儿') {
    // actionRouter.router = 'dashboard'
    actionRouter.router = 'cartoon'
  } else {
    actionRouter.router = 'education'
  }
  return (
    <ConnectedRouter history={history}>
      {/*<Container>*/}
      <Switch>
        <Route exact path="/" render={() => (<Redirect to={actionRouter.router}/>)}/>
        {
          routes.map(({ path, ...dynamics }, key) => (
            <Route key={key}
                   exact
                   path={path}
                   component={dynamic({
                     app,
                     ...dynamics,
                   })}
            />
          ))
        }
        <Route component={error}/>
      </Switch>
      {/*</Container>*/}
    </ConnectedRouter>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers

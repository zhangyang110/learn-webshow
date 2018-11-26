import React from 'react'
import Bg from '../public/globalimgs/globalbg.png'
import styles from './container.less'
import { withRouter } from 'dva/router'
import { connect } from 'dva'

import PropTypes from 'prop-types'
import pathToRegexp from 'path-to-regexp'
import { classnames, config } from 'utils'

const Container = ({ children, dispatch, app, loading, location }) => {
  return (<div style={{ backgroundImage: `url(${Bg})` }} className={styles.container}>
    {children}
  </div>)
}
Container.propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  location: PropTypes.object,
  loading: PropTypes.object,
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(Container))

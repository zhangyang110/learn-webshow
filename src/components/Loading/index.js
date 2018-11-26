import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './index.less'
import loadingImg from '../../public/globalimgs/loading.png'
class Loader extends React.Component {

  render() {
    return (<div className={styles.container}>
      {/*<div className={styles.imgcontainer}><img src={loadingImg} alt=""/></div>*/}
    </div>)
  }
}

export default Loader

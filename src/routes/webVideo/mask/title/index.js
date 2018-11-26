import React from 'react'
import styles from './index.less'

export default class Title extends React.Component {

  render() {
    let { title, playNow ,episode} = this.props
    return <div className={styles.title}>
      <div>
        <span > {title} </span>
        <span>第{playNow+1||episode}集</span>
      </div>
    </div>
  }
}

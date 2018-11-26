import React from 'react'
import styles from './index.less'
import line from '../../../../public/globalimgs/webplayer/bot.png'
import classnames from 'classnames'

export default class Select extends React.Component {

  list = () => {
    let { episodes, playNow, episode,focusIndex } = this.props
    let ary = []
    for (let i = 1; i <= episodes; i++) {
      ary.push(i)
    }
    return ary.map((item, index) => {
      return <div key={index} className={classnames({
        [styles.item]: true,
        [styles.playNow]: playNow == index ? true : false,
        [styles.focusAt]: focusIndex == index ? true : false,
      })}>{item}</div>
    })
  }

  render() {
    let { episodes, focusIndex, playNow, selectShow, moveTimes } = this.props
    let style = {
      display: selectShow ? 'block' : 'none',
    }
    return <div className={styles.select} style={style}>
      <span className={styles.secT}>选集</span>
      <img src={line} alt="" className={styles.line}/>
      <div className={styles.ls} style={{ left: `-${moveTimes * 1.08}rem` }}>
        {
          this.list()
        }
      </div>

    </div>
  }
}

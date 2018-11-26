import React from 'react'
import styles from './index.less'
import Title from './title'
import Select from './select'
import Controls from './controls'

export default class Mask extends React.Component {

  render() {
    let {
      title,
      episode,
      isplaying,
      nowT,
      lastT,
      episodes,
      playedPercent,
      DownloadedPercent,
      focusIndex,
      playNow,
      selectShow,
      moveTimes, showMask,
    } = this.props

    let titleOpts = {
      title,
      playNow,
      episode,
    }
    let controlOpts = {
      nowT,
      playedPercent,
      DownloadedPercent,
      lastT,
      isplaying,
      selectShow,
    }
    let selectOpts = {
      episodes,
      focusIndex,
      playNow,
      episode,
      selectShow,
      moveTimes,
    }
    let style = {
      display: showMask ? 'block' : 'none',
    }
    return <div className={styles.mask} style={style}>
      <Title {...titleOpts}/>
      <Controls {...controlOpts}/>
      <Select {...selectOpts}/>
    </div>
  }
}

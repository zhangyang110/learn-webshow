import React from 'react'
import styles from './index.less'
import playBtn from '../../../../public/globalimgs/webplayer/paly.png'
import arrestBtn from '../../../../public/globalimgs/webplayer/arrest.png'

export default class Controls extends React.Component {


  render() {
    // let {nowT,DownloadedPercent,duration}=this.props;
    let {
      nowT,
      playedPercent,
      DownloadedPercent,
      lastT,
      isplaying,selectShow
    } = this.props
    let src = isplaying ? arrestBtn : playBtn
    let style={
      display:selectShow?'none':'block'
    }
    return <div className={styles.controls} style={style}>
      <img src={src} className={styles.controlBtn} alt=""/>
      <span className={styles.playT}>{nowT}</span>

      <div className={styles.progressC}>
        <div className={styles.loaded} style={{ width: `${DownloadedPercent}` }}></div>
        <div className={styles.played} style={{ width: `${playedPercent}` }}></div>
      </div>
      <span className={styles.remainT}>{lastT}</span>
    </div>
  }
}

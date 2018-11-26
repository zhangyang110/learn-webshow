import React from 'react'
import styles from './index.less'
import { connect } from 'dva'
import bg from '../../public/Imgs/detail/bg.jpg'
import line from '../../public/Imgs/detail/line.png'
// import botfocus from './botfocus.png'
import bofang from '../../public/Imgs/detail/bofang.png'
import shoucangImg from '../../public/Imgs/detail/yishoucang.png'
import yishoucangfocus from '../../public/Imgs/detail/yishoucangfocus.png'
import weishoucang from '../../public/Imgs/detail/weishoucang.png'

import dinggouImg from '../../public/Imgs/detail/dinggou.png'
import yidinggouImg from '../../public/Imgs/detail/yidinggou.png'
import focus from '../../public/Imgs/detail/focus.png'
import { resPrefix } from 'utils/config'
import MiddlePage from './middlepage'
import BotPage from './bottomPage'
import Loader from '../../components/Loading'

const position = [
  { left: 339, top: 278, width: 66, height: 60 },
  { left: 432, top: 278, width: 66, height: 60 },
  { left: 525, top: 278, width: 66, height: 60 },
]

class Detail extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleDetailPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleDetailPress)
  }

  handleDetailPress = (e) => {
    const { topFocus } = this.props.detail
    if (topFocus == -1) {
      return
    }
    switch (e.keyCode) {
      case 37:
        this.moveLeft()
        break
      case 39:
        this.moveRight()
        break
      case 40:
        this.moveDown()
        break
      case 13:
        this.handleEnter()
        break
    }
    if(window.globalOpts.channel==='chongqing'){

    }else {
      e.preventDefault && e.preventDefault()
      e.returnValue = false
      e.stopPropagation && e.stopPropagation()
      return false
    }
  }
  moveLeft = () => {
    const { topFocus } = this.props.detail
    switch (topFocus) {
      case 1:
        this.sendAction(0)
        break
      case 2:
        this.sendAction(1)
        break
    }
  }
  moveRight = () => {
    const { topFocus } = this.props.detail
    switch (topFocus) {
      case 0:
        this.sendAction(1)
        break
      // case 1:
      //   this.sendAction(2);
      //   break;
    }
  }
  moveDown = () => {
    const { currentPage } = this.props.detail
    let toMid = (currentPage - 1) * 6
    this.props.dispatch({ type: 'detail/change', payload: { topFocus: -1 } })

    setTimeout(() => {
      this.props.dispatch({ type: 'detail/change', payload: { midFocus: toMid } })

    }, 0)
    return
  }
  handleEnter = () => {
    const { seriesData, topFocus, movieData, isCollect } = this.props.detail
    let seriesId
    let episode
    switch (topFocus) {
      case 0:
        seriesId = seriesData.id
        console.log(globalOpts.platform)
        if (globalOpts.platform == 'android') {
          button.startVideoPlay(`${seriesId}`,1)
        } else if (globalOpts.platform == 'other') {
          // this.props.dispatch({type: 'detail/toPlayer', payload: {seriesId, episode:1}})
          window.location.href='http://10.0.4.42:8080/souhu/player/gxplay.htm?uid=4&url=rtsp://10.1.15.44:554/5b4533c5a2d9422d879144eed0ba858b.ts^^^?&provider=coship'
          // window.location.href='https://translate.google.cn/'

        }
        break
      case 1:
        if (!isCollect) {
          //如果没收藏  就收藏
          seriesId = seriesData.id
          this.props.dispatch({ type: 'detail/addCollect', payload: { seriesId, name: '' } })
        } else {
          seriesId = seriesData.id
          this.props.dispatch({ type: 'detail/delCollect', payload: { seriesId, name: '' } })
        }

    }
  }
  findFocus = () => {
    const { topFocus } = this.props.detail
    if (topFocus == -1) {
      return
    }
    const focusImg = position[topFocus]
    const left = (focusImg.left - 13) / 100 + 'rem'
    const top = (focusImg.top - 13) / 100 + 'rem'
    const width = (Number(focusImg.width) + 26) / 100 + 'rem'
    const height = (Number(focusImg.height) + 26) / 100 + 'rem'
    return <img src={focus} style={{ position: 'absolute', width, height, top, left }}/>
  }
  sendAction = (param) => {

    this.props.dispatch({ type: 'detail/change', payload: { topFocus: param } })
  }

  render() {
    const { seriesData, movieData, isCollect, topFocus } = this.props.detail
    if (seriesData.length <= 0 || movieData.length <= 0) {
      return <Loader/>
    }
    const { cover_url, name, tag, summary, dinggou } = this.props.detail.seriesData
    let by
    if (tag.includes(';')) {
      by = ';'
    } else if (tag.includes('；')) {
      by = '；'
    } else if (tag.includes(':')) {
      by = ':'
    }
    const ary = tag.split(by)
    let newTag = ''
    for (let i = 0; i < ary.length; i++) {
      newTag += ary[i] + ' | '
    }
    newTag = newTag.slice(0, newTag.length - 2)

    let collectSrc = isCollect && topFocus == 1 ? `${yishoucangfocus}` : isCollect && topFocus != 1 ? `${shoucangImg}` : `${weishoucang}`

    return (<div
      className={styles.container}
      style={{ backgroundImage: `url(${bg})` }}>
      <img src={line} className={styles.line} alt=""/>
      <img src={`${resPrefix}/${cover_url}`} className={styles.coverImg} alt=""/>
      <p className={styles.name}>{`${name}`}</p>
      <p className={styles.tag}>{`${newTag}`}</p>
      <p className={styles.summary}>{`${summary}`}</p>
      <img src={bofang} className={styles.bofang} alt=""/>
      <img src={collectSrc} className={styles.shoucang} alt=""/>
      {/*<img src={dinggou ? `${yidinggouImg}` : `${dinggouImg}`} className={styles.dinggou} alt=""/>*/}
      {
        this.findFocus()
      }
      <MiddlePage dispatch={this.props.dispatch} detail={this.props.detail}/>
      <BotPage dispatch={this.props.dispatch} detail={this.props.detail}/>
    </div>)
  }
}

export default connect((detail) => (detail))(Detail)

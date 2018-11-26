import React from 'react'
import styles from './index.less'
// import { Lifecycle, RouteContext } from 'react-router'

import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'
import 'videojs-flash'
// import 'videojs-mux'


export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.dispatch = this.props.dispatch.bind(this)
    this.showSelect = this.props.showSelect.bind(this)
    this.hideSelect = this.props.hideSelect.bind(this)
    this.changeSource = this.props.changeSource.bind(this)
    this.hideAll = this.props.hideAll.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
    this.player = videojs('my-player', this.props.options, function onPlayerReady() {
    })
    this.player.on('durationchange', this.onDurationchange)
    this.player.on('firstplay', this.onFirstPlay)
    this.player.on('ended', this.onEnded)
    this.player.on('progress', this.onProgress)
    this.player.on('waiting', this.onWaiting)
    this.player.on('pause', this.onPause)
    this.player.on('play', this.onPlay)
    this.player.on('seeking', this.onSeeking)
    this.player.on('seeked', this.onSeeked)
    this.player.on('timeupdate', this.onTime)
    this.hideAll()
  }

  onFirstPlay = () => {
    this.dispatch({ isplaying: true, showLoad: false })
  }
  formatT = (s) => {
    let t
    if (s > -1) {
      var hour = Math.floor(s / 3600)
      var min = Math.floor(s / 60) % 60
      var sec = s % 60
      if (hour < 10) {
        t = '0' + hour + ':'
      } else {
        t = hour + ':'
      }

      if (min < 10) {
        t += '0'
      }
      t += min + ':'
      if (sec < 10) {
        t += '0'
      }
      t += sec.toFixed(0)
    }
    return t
  }
  onSeeking = () => {
    // console.log('onSeeking')
    this.dispatch({ showLoad: true })
  }
  onTime = () => {
    let duration = this.player.duration()
    let currentTime = this.player.currentTime()
    let DownloadedPercent = `${this.player.bufferedPercent() * 100}%`
    let nowT = this.formatT(currentTime)
    let lastT = this.formatT(duration - currentTime)
    let playedPercent = `${currentTime / duration * 100}%`
    this.dispatch({ playedPercent, DownloadedPercent, nowT, lastT })
    //时间格式化1  已经进行的额时间  格式化
    // 剩余时间格式化
    // 获取 百分比的缓冲
    // 获取播放百分比
    // let perC=playedPercent.split("%")
    // if(perC[0]>=66){
    // this.props.addEplay()
    // }
  }
  onEnded = () => {
    console.log('onEnded')
    this.props.addEplay()
  }
  onDurationchange = (a) => {
    // console.log(a)
    // let duration = this.player.duration() * 1000
    // this.dispatch({ duration })
  }

  onSeeked = () => {
    console.log('onSeeked')
    this.dispatch({ showLoad: false })
  }
  onPlay = () => {
    console.log('onPlay')
    this.dispatch({ showLoad: false, isplaying: true })
    // 添加播放历史
    this.props.addHistory()
    //添加一条播放量
    this.props.addPlayC()
    //有效播放量

  }
  onProgress = () => {
    console.log('onProgress')

  }
  onWaiting = () => {
    console.log('waiting')
    // this.dispatch({ showLoad: true })
  }
  onPause = () => {
    this.dispatch({ isplaying: false })
  }
  handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 37:
        this.moveLeft()
        break
      case 38:
        this.moveUp()
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
    this.dispatch({ showMask: true })
    this.hideAll()
  }

  moveLeft = () => {
    if (location.search) {
      this.lsLeft()
    } else {
      let currentTime = this.player.currentTime()
      const toTime = (currentTime - 20)
      this.player.currentTime(toTime)
    }
  }
  moveUp = () => {
    if (!location.search) {
      this.showSelect()
    }
  }
  moveRight = () => {
    if (location.search) {
      this.lsRight()
    } else {
      this.seekTo()
    }
  }
  lsLeft = () => {
    let { isplaying, showSelect, hideSelect, episodes, focusIndex, moveTimes } = this.props
    if (focusIndex > moveTimes) {
      this.dispatch({ focusIndex: focusIndex - 1 })
    } else {
      focusIndex === 0 ? '' : this.dispatch({ moveTimes: moveTimes - 1, focusIndex: focusIndex - 1 })
    }
  }
  lsRight = () => {
    let { isplaying, showSelect, hideSelect, episodes, focusIndex, moveTimes } = this.props
    let isOver = focusIndex + 1 > moveTimes + 11 && moveTimes + 11 < episodes - 1
    if (isOver) {
      this.dispatch({ focusIndex: focusIndex + 1, moveTimes: moveTimes + 1 })
    } else {
      // focusIndex + 1 > episodes - 1 ? '' : this.dispatch({ focusIndex: focusIndex + 1 })
      this.dispatch({ focusIndex: focusIndex + 1 > episodes - 1 ? focusIndex : focusIndex + 1 })
    }
  }
  seekTo = () => {
    const currentTime = this.player.currentTime()
    this.player.currentTime(currentTime + 20)
  }
  handleEnter = () => {
    let { focusIndex, seriesId, episode } = this.props
    if (location.search) {
      this.changeSource(focusIndex + 1)
      this.player.pause()
      this.player.src(`http://192.168.1.244/videos/${seriesId}/${focusIndex + 1}.mp4`)
      this.player.load(`http://192.168.1.244/videos/${seriesId}/${focusIndex + 1}.mp4`)
      // this.player.play()
      // this.dispatch({episode:focusIndex + 1})
    } else {
      this.changePlay()
    }
  }
  changePlay = () => {
    let isPaused = this.player.paused()
    if (!isPaused) {
      this.player.pause()
    } else {
      this.player.play()
    }
  }
  moveDown = () => {

  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
    return (
      <div className={styles.video}>
        <video id="my-player" data-setup=""></video>
      </div>
    )
  }
}

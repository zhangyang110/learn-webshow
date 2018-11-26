import React from 'react'
import styles from './index.less'
import { connect } from 'dva'
import VideoPlayer from './player'
import Mask from './mask'
import LoadVideo from './loading'
import pathToRegexp from 'path-to-regexp'

class VideoPlay extends React.Component {

  componentWillUnmount() {
    this.props.dispatch({
      type: 'webVideo/change', payload: {
        seriesId: 0,
        episode: 0,
        episodes: 0,

        title: '',
        showLoad: true,
        isplaying: false,

        nowT: '00:00:00',
        lastT: '00:00:00',
        playedPercent: '0%',
        DownloadedPercent: '0%',

        focusIndex: 0,
        playNow: null,
        selectShow: false,
        moveTimes: 0,
        showMask: true,
      },
    })
  }

  dispatch = (param) => {
    this.props.dispatch({ type: 'webVideo/change', payload: { ...param } })
  }
  showSelect = () => {
    const { episode, playNow } = this.props.webVideo
    this.props.dispatch({ type: 'webVideo/showSelect', payload: { pathname: location.pathname, episode, playNow } })
  }
  hideSelect = () => {
    this.props.dispatch({ type: 'webVideo/hideSelect', payload: {} })
  }
  hideAll = () => {
    clearTimeout(this.t)
    this.t = setTimeout(() => {
      if (location.search) {
        this.hideSelect()
        this.dispatch({ showMask: false })
      } else {
        this.dispatch({ showMask: false })
      }
    }, 3000)
  }
  changeSource = (playNow) => {
    let match = pathToRegexp('/webVideo/:seriesId/:episode')
      .exec(location.pathname)
    let seriesId = Number(match[1])
    this.props.dispatch({ type: 'webVideo/getData', payload: { seriesId, episode: playNow, playNow } })
    this.props.dispatch({ type: 'webVideo/change', payload: { playNow: playNow - 1 } })
  }
  addHistory = () => {
    this.props.dispatch({ type: 'webVideo/addHistory', payload: '' })
  }
  addPlayC = () => {
    this.props.dispatch({ type: 'webVideo/addPlayC', payload: '' })

  }
  addEplay = () => {
    this.props.dispatch({ type: 'webVideo/addEplay', payload: '' })
  }

  render() {
    const { seriesId, episode, showLoad, title, isplaying, nowT, lastT, DownloadedPercent, showMask, episodes, playedPercent, focusIndex, playNow, selectShow, moveTimes } = this.props.webVideo
    if (!episode || !seriesId) {
      let loading = {
        showLoad,
      }
      return <LoadVideo {...loading}/>
    }

    const videoJsOptions = {

      options: {
        autoplay: true,
        controls: false,
        sources: [{
          src: `http://192.168.1.244/videos/${seriesId}/${episode}.mp4`,
          // src: `http://192.168.1.244/videos/804/${episode}.ts`,
          // src: `http://192.168.1.244/videos/804/1.ts`,
          // src: `./player/1.ts`,
          // src: `https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8`,
          // src: `https://wowzaec2demo.streamlock.net/vod-multitrack/_definst_/smil:ElephantsDream/elephantsdream2.smil/playlist.m3u8`,
        }],
        // techOrder: ["html5", "flash", "other supported tech"],
        bigPlayButton: false,
        textTrackDisplay: false,
        posterImage: true,
        errorDisplay: false,
        controlBar: false,
      },
      addHistory: this.addHistory,
      addPlayC: this.addPlayC,
      addEplay: this.addEplay,
      dispatch: this.dispatch,
      isplaying,
      showSelect: this.showSelect,
      hideSelect: this.hideSelect,
      episodes,
      focusIndex,
      moveTimes,
      seriesId,
      episode,
      changeSource: this.changeSource,
      hideAll: this.hideAll,
    }
    const loadOpts = {
      showLoad,
    }
    const maskOpts = {
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
      moveTimes,
      showMask,
    }
    return <div className={styles.videoContainer}>
      <VideoPlayer  {...videoJsOptions}/>
      <Mask {...maskOpts}/>
      <LoadVideo {...loadOpts}/>
    </div>
  }
}


export default connect(({ webVideo }) => ({ webVideo }))(VideoPlay)




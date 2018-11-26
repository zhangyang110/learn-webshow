import React from 'react'
import styles from './index.less'
import { connect } from 'dva'
import { config } from 'utils'
import videojs from 'video.js'
import 'videojs-contrib-hls'
import 'video.js/dist/video-js.min.css'
import { Link, Prompt } from 'react-router-dom'

class VideoPlay extends React.Component {
  componentDidMount() {
    var transmuxer = new muxjs.mp4.Transmuxer(initOptions)
    transmuxer.on('data', function (segment) {
      sourceBuffer.appendBuffer(segment.data.buffer)
    })
  }

  render() {
    return (
      <div>
        {/*<video src="#player"></video>*/}
        <Prompt
          when={true}
          message="Are you sure you want to leave?"/>
        <Link to='/webVideo/2/1' style={{ width: '100%', height: 10000, color: 'red' }}>sdfssdfdsffsfsdf</Link>
      </div>
    )
  }
}


export default connect(({ videoplay, dispatch }) => ({ videoplay, dispatch }))(VideoPlay)

import React from "react";
import styles from './index.less'
import {resPrefix} from 'utils/config'
import classnames from 'classnames'
import midbg from '../../../public/Imgs/detail/midbg.png'
import midfocus from '../../../public/Imgs/detail/midfocus.png'

const template = [
  {left: 79, top: 418, width: 360, height: 100},
  {left: 460, top: 418, width: 360, height: 100},
  {left: 841, top: 418, width: 360, height: 100},
  {left: 79, top: 539, width: 360, height: 100},
  {left: 460, top: 539, width: 360, height: 100},
  {left: 841, top: 539, width: 360, height: 100},
]

class MiddlePage extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    const {midFocus} = this.props.detail;
    if (midFocus == -1) {
      return
    }
    switch (e.keyCode) {
      case 37:
        this.moveLeft()
        break;
      case 38:
        this.moveUp()
        break;
      case 39:
        this.moveRight()
        break;
      case 40:
        this.moveDown()
        break;
      case 13:
        this.handleEnter()
        break;
    }
  }
  moveLeft = () => {
    const {midFocus, currentPage} = this.props.detail;
    if (midFocus == (currentPage - 1) * 6) {
      return
    }
    let newFocus = midFocus - 1;
    this.sendAction(newFocus)

  }
  handleEnter = () => {
    const {movieData, midFocus, seriesData} = this.props.detail;
    let seriesId = seriesData.id;
    let episode = movieData[midFocus].episode;
    if (globalOpts.platform === 'android') {
      button.startVideoPlay(`${seriesId}`, episode)
    } else if (globalOpts.platform === 'other') {
      // this.props.dispatch({type: 'detail/toPlayer', payload: {seriesId, episode}})
      window.location.href='http://10.0.4.42:8080/souhu/player/gxplay.htm?uid=4&url=rtsp://10.1.15.44:554/5b4533c5a2d9422d879144eed0ba858b.ts^^^?&provider=coship'
      // window.location.href='https://translate.google.cn/'
    }
  }
  moveRight = () => {
    const {midFocus, currentPage, movieData} = this.props.detail;
    if (midFocus == (currentPage - 1) * 6 + 5 || midFocus >= movieData.length - 1) {
      return
    }
    let newFocus = midFocus + 1;
    this.sendAction(newFocus)

  }
  moveDown = () => {
    const {midFocus, currentPage, movieData} = this.props.detail;
    const RowOne = midFocus >= Number(currentPage - 1) * 6 && midFocus <= Number(currentPage - 1) * 6 + 2;
    const RowTwo = midFocus >= Number(currentPage - 1) * 6 + 3 && midFocus <= Number(currentPage - 1) * 6 + 5;
    //判断是正下方是否有数据
    const flag = Number(midFocus) + 3 <= movieData.length - 1;

    if (flag) {
      // 有数据
      if (RowOne) {
        this.sendAction(Number(midFocus) + 3)
      } else if (RowTwo) {
        this.props.dispatch({type: 'detail/change', payload: {midFocus: -1, botForbid: false}})
        return
      }
    } else {
      //mei shuju
      const remainder = movieData.length % 3;
      if (RowTwo) {
        this.props.dispatch({type: 'detail/change', payload: {midFocus: -1, botForbid: false}})
        return
      } else {
        if (remainder == 1) {

          if (midFocus <= movieData.length - 1) {
            switch (midFocus) {
              case movieData.length - 3:
                this.sendAction(Number(midFocus) + 2)
                break;
              case movieData.length - 2:
                this.sendAction(Number(midFocus) + 1)
                break;
              case movieData.length - 1:
                this.props.dispatch({type: 'detail/change', payload: {midFocus: -1, botForbid: false}})
                break;
            }
          }
        } else if (remainder == 2) {
          if (midFocus <= movieData.length - 1) {
            switch (midFocus) {
              case movieData.length - 3:
                this.sendAction(Number(midFocus) + 1)
                break;
              case movieData.length - 2:
                this.props.dispatch({type: 'detail/change', payload: {midFocus: -1, botForbid: false}})
                break;
              case movieData.length - 1:
                this.props.dispatch({type: 'detail/change', payload: {midFocus: -1, botForbid: false}})
                break;
            }
          }
        } else {
          this.props.dispatch({type: 'detail/change', payload: {midFocus: -1, botForbid: false}})
        }
      }
    }
  }
  moveUp = () => {
    const {midFocus, currentPage, movieData} = this.props.detail;
    const RowOne = midFocus >= Number(currentPage - 1) * 6 && midFocus <= Number(currentPage - 1) * 6 + 2;
    const RowTwo = midFocus >= Number(currentPage - 1) * 6 + 3 && midFocus <= Number(currentPage - 1) * 6 + 5;

    if (RowOne) {
      this.props.dispatch({type: 'detail/change', payload: {topFocus: 0, midFocus: -1,}})
    } else if (RowTwo) {
      this.sendAction(midFocus - 3)
    }
  }
  sendAction = (param) => {
    this.props.dispatch({type: 'detail/change', payload: {midFocus: param}})
  }
  mapTem = () => {
    const {movieData, currentPage, midFocus} = this.props.detail;
    const curData = movieData.slice((currentPage - 1) * 6, (currentPage - 1) * 6 + 6);
    return curData.map((item, index) => {
      const curTem = template[index % 6];
      const width = curTem.width / 100 + 'rem';
      const height = curTem.height / 100 + 'rem';
      const left = curTem.left / 100 + 'rem';
      const top = curTem.top / 100 + 'rem';
      let addAnimate = midFocus == Number(index) + (currentPage - 1) * 6 && item.name.length >= 10;
      return <div className={styles.tem} style={{width, height, left, top}} key={index}>
        <img src={midbg} className={styles.temBg} />
        <img src={`/res/v3/screenshot/${item.cover_url}`} className={styles.contentImg} alt=""/>
        <div className={styles.name}>
          <div className={classnames({[styles.loopText]: !addAnimate, [styles.loopTextAnimate]: addAnimate})}>
            <span className={styles.todayScroll}>
              {item.name}
             </span>
            {addAnimate ? <span className={styles.todayScroll}>
                {item.name}
             </span> : ''}
          </div>
        </div>

        <p className={styles.episode}>第{item.episode}集</p>
      </div>
    })
  }
  findFocus = () => {
    const {midFocus} = this.props.detail;
    if (midFocus == -1) {
      return
    }
    const index = midFocus % 6;
    const curPosition = template[index];
    const left = (curPosition.left - 13) / 100 + 'rem';
    const top = (curPosition.top - 13) / 100 + 'rem';
    const width = (Number(curPosition.width) + 26) / 100 + 'rem';
    const height = (Number(curPosition.height) + 26) / 100 + 'rem';

    return <img src={`${midfocus}`} style={{width, height, top, left, position: 'absolute'}} />
  }

  render() {
    return (<div className={styles.container}>
      {
        this.mapTem()
      }
      {
        this.findFocus()
      }

    </div>)
  }
}

export default MiddlePage

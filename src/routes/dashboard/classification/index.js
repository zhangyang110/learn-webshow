import React from "react";
import styles from './index.less'

import focus from '../../../public/Imgs/dashboard/classification/focus.png'
import zero from '../../../public/Imgs/dashboard/classification/1.png'
import three from '../../../public/Imgs/dashboard/classification/2.png'
import six from '../../../public/Imgs/dashboard/classification/3.png'
import women from '../../../public/Imgs/dashboard/classification/4.png'
import man from '../../../public/Imgs/dashboard/classification/5.png'
import yizhi from '../../../public/Imgs/dashboard/classification/6.png'
import maoxian from '../../../public/Imgs/dashboard/classification/7.png'
import jingdian from '../../../public/Imgs/dashboard/classification/8.png'
import fenleibg from '../../../public/Imgs/dashboard/index/fenleibg.png'

const column = [
  {contentLeft: 80, contentTop: 163, contentWidth: 264, contentHeight: 228, contentImg: zero},
  {contentLeft: 365, contentTop: 163, contentWidth: 264, contentHeight: 228, contentImg: three},
  {contentLeft: 650, contentTop: 163, contentWidth: 264, contentHeight: 228, contentImg: six},
  {contentLeft: 935, contentTop: 163, contentWidth: 264, contentHeight: 228, contentImg: women},
  {contentLeft: 80, contentTop: 412, contentWidth: 264, contentHeight: 228, contentImg: man},
  {contentLeft: 365, contentTop: 412, contentWidth: 264, contentHeight: 228, contentImg: yizhi},
  {contentLeft: 650, contentTop: 412, contentWidth: 264, contentHeight: 228, contentImg: maoxian},
  {contentLeft: 935, contentTop: 412, contentWidth: 264, contentHeight: 228, contentImg: jingdian},
]

class Classification extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
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
  sendAction = (param) => {
    // const payload = {ClassifyFocusIndex: param}
    // this.props.dispatch({type: 'dashboard/change', payload})
    if (param != -1) {
      this.props.dispatch({type: 'dashboard/change', payload: {headerBlur: true, ClassifyFocusIndex: param}})
    } else {
      this.props.dispatch({type: 'dashboard/change', payload: {headerBlur: false, ClassifyFocusIndex: param}})
    }
  }
  moveLeft = (param) => {
    const {ClassifyFocusIndex} = this.props.dashboard
    if (ClassifyFocusIndex <= 7 && ClassifyFocusIndex >= 1) {
      this.sendAction(ClassifyFocusIndex - 1);
    }
  }
  moveRight = (payload) => {
    const {ClassifyFocusIndex} = this.props.dashboard
    if (ClassifyFocusIndex <= 6 && ClassifyFocusIndex >= 0) {
      this.sendAction(ClassifyFocusIndex + 1);
    }
  }
  moveUp = (param) => {
    const {ClassifyFocusIndex} = this.props.dashboard
    switch (ClassifyFocusIndex) {
      case 0:
        this.sendAction(-1);
        break;
      case 1:
        this.sendAction(-1);
        break;
      case 2:
        this.sendAction(-1);
        break;
      case 3:
        this.sendAction(-1);
        break;
      case 4:
        this.sendAction(0);
        break;
      case 5:
        this.sendAction(1);
        break;
      case 6:
        this.sendAction(2);
        break;
      case 7:
        this.sendAction(3);
        break;

    }
  }
  moveDown = (param) => {
    const {ClassifyFocusIndex} = this.props.dashboard
    switch (ClassifyFocusIndex) {
      case -1:
        this.sendAction(0);
        break;
      case 0:
        this.sendAction(4);
        break;
      case 1:
        this.sendAction(5);
        break;
      case 2:
        this.sendAction(6);
        break;
      case 3:
        this.sendAction(7);
        break;
    }
  }
  jumpPage = (param) => {
    this.props.dispatch({type: 'dashboard/classifyJumpPage', payload: param})
  }
  handleEnter = (param) => {
    const {ClassifyFocusIndex} = this.props.dashboard;
    switch (ClassifyFocusIndex) {
      case 0:
        this.jumpPage(3)
        break;
      case 1:
        this.jumpPage(4)
        break;
      case 2:
        this.jumpPage(8)
        break;
      case 3:
        this.jumpPage(9)
        break;
      case 4:
        this.jumpPage(10)
        break;
      case 5:
        this.jumpPage(11)
        break;
      case 6:
        this.jumpPage(12)
        break;
      case 7:
        // this.jumpPage('all')
        this.jumpPage(13)
        break;
    }
  }

  findFocus = () => {
    const {ClassifyFocusIndex} = this.props.dashboard;
    if (ClassifyFocusIndex == -1) {
      return
    }
    const focusImg = column[ClassifyFocusIndex]
    const width = (focusImg.contentWidth + 26) / 100 + 'rem';
    const height = (focusImg.contentHeight + 26) / 100 + 'rem';
    const top = (focusImg.contentTop - 13) / 100 + 'rem';
    const left = (focusImg.contentLeft - 13) / 100 + 'rem';
    const src = focus;
    const imgStyle = {width, height, position: 'absolute', left, top}
    return <img src={src} style={imgStyle}/>
  }
  render() {
    return (<div className={styles.contentContainer}
                 style={{backgroundImage: `url(${fenleibg})`}}>
      {
        column.map((item, index) => {
          const width = item.contentWidth / 100 + 'rem';
          const height = item.contentHeight / 100 + 'rem';
          const top = item.contentTop / 100 + 'rem';
          const left = item.contentLeft / 100 + 'rem';
          const imgSrc = item.contentImg;
          const divStyle = {width, height, position: 'absolute', left, top}
          return <div key={index} style={divStyle}>
            <img src={`${imgSrc}`} style={{width, height}} className={styles.contentImg} />
          </div>
        })

      }
      {
        this.findFocus()
      }
    </div>)
  }
}

export default Classification

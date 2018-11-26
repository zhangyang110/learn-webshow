import React from "react";
import styles from './index.less'
import {config} from 'utils'
import ReactPlayer from 'react-player'
import focus1 from '../../../public/Imgs/dashboard/recommend/focusebg1.png'
import focus2 from '../../../public/Imgs/dashboard/recommend/focusebg2.png'
import focus3 from '../../../public/Imgs/dashboard/recommend/focusebg3.png'
import focus4 from '../../../public/Imgs/dashboard/recommend/focusebg4.png'
import history from '../../../public/Imgs/dashboard/recommend/history.png'
import shoucang from '../../../public/Imgs/dashboard/recommend/shoucang.png'
import tuijian from '../../../public/Imgs/dashboard/index/dashboardBackgroundImg.png'
import Loader from "../../../components/Loading";

const bgColumn = [
  {left: 65, top: 149, width: 457, height: 328, bgImg: focus1},
  {left: 519, top: 149, width: 457, height: 328, bgImg: focus1},
  {left: 971, top: 149, width: 244, height: 166, bgImg: focus2},
  {left: 971, top: 311, width: 244, height: 166, bgImg: focus2},

  {left: 971, top: 473, width: 244, height: 180, bgImg: focus3},
  {left: 65, top: 473, width: 306, height: 180, bgImg: focus4},
  {left: 367, top: 473, width: 306, height: 180, bgImg: focus4},
  {left: 669, top: 473, width: 306, height: 180, bgImg: focus4},
]
const localImg = [
  {left: 984, top: 162, width: 218, height: 140, contentImg: history},
  {left: 984, top: 324, width: 218, height: 140, contentImg: shoucang},
]

class Recommend extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    let {currentHeader, headerBlur} = this.props.dashboard;
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
    if (param != -1) {
      this.props.dispatch({type: 'dashboard/change', payload: {headerBlur: true, recommendFocusIndex: param}})
    } else {
      this.props.dispatch({type: 'dashboard/change', payload: {headerBlur: false, recommendFocusIndex: param}})
    }
  }
  moveLeft = (param) => {
    const {recommendFocusIndex} = this.props.dashboard
    switch (recommendFocusIndex) {
      case 1:
        this.sendAction(0);
        break;
      case 2:
        this.sendAction(1);
        break;
      case 3:
        this.sendAction(1);
        break;
      case 4:
        this.sendAction(7);
        break;
      case 5:
        this.sendAction(3);
        break;
      case 6:
        this.sendAction(5);
        break;
      case 7:
        this.sendAction(6);
        break;
    }
  }
  moveUp = (param) => {
    const {recommendFocusIndex} = this.props.dashboard
    switch (recommendFocusIndex) {
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
        this.sendAction(2);
        break;
      case 4:
        this.sendAction(3);
        break;
      case 5:
        this.sendAction(0);
        break;
      case 6:
        this.sendAction(0);
        break;
      case 7:
        this.sendAction(1);
        break;
    }
  }
  moveDown = (param) => {
    const {recommendFocusIndex} = this.props.dashboard
    switch (recommendFocusIndex) {
      case -1:
        this.sendAction(0);
        break;
      case 0:
        this.sendAction(5);
        break;
      case 1:
        this.sendAction(6);
        break;
      case 2:
        this.sendAction(3);
        break;
      case 3:
        this.sendAction(4);
        break;

      // case 4:
      //   this.sendAction(0);
      // case 5:
      //   this.sendAction(0);


    }
  }
  moveRight = (payload) => {
    const {recommendFocusIndex} = this.props.dashboard
    switch (recommendFocusIndex) {
      case 0:
        this.sendAction(1);
        break;
      case 1:
        this.sendAction(2);
        break;
      // case 2:
      //   this.sendAction(1);
      //   break;
      // case 3:
      //   this.sendAction(1);
      //   break;
      // case 4:
      //   this.sendAction(7);
      //   break;
      case 5:
        this.sendAction(6);
        break;
      case 6:
        this.sendAction(7);
        break;
      case 7:
        this.sendAction(4);
        break;
    }
  }
  handleEnter = (param) => {
    const {recommendFocusIndex, recommendList} = this.props.dashboard;
    switch (recommendFocusIndex) {
      case 0:
        this.jumpPage(recommendList[0]);
        break;
      case 1:
        this.jumpPage(recommendList[1]);
        break;
      case 2:
        this.jumpPage('playHistory');
        break;
      case 3:
        this.jumpPage('collects');
        break;
      case 4:
        this.jumpPage(recommendList[5]);
        break;
      case 5:
        this.jumpPage(recommendList[2]);
        break;
      case 6:
        this.jumpPage(recommendList[3]);
        break;
      case 7:
        this.jumpPage(recommendList[4]);
        break;
    }

  }
  jumpPage = (param) => {
    console.log(param);
    this.props.dispatch({type: 'dashboard/recommendJumpPage', payload: param})
  }
  findFocus = () => {
    const {recommendFocusIndex} = this.props.dashboard;
    if (recommendFocusIndex == -1) {
      return
    }
    const focusImg = bgColumn[recommendFocusIndex]
    const width = focusImg.width / 100 + 'rem';
    const height = focusImg.height / 100 + 'rem';
    const top = focusImg.top / 100 + 'rem';
    const left = focusImg.left / 100 + 'rem';
    const src = focusImg.bgImg;
    const imgStyle = {width, height, position: 'absolute', left, top}
    return <img src={src} style={imgStyle}/>
  }

  render() {
    const {recommendList, recommendFocusIndex,} = this.props.dashboard;
    if (recommendList.length <= 0) {
      return <Loader/>
    }
    const contentImg = [
      {left: 78, top: 162, width: 431, height: 302, contentImg: recommendList[0].cover_url},
      {left: 532, top: 162, width: 431, height: 302, contentImg: recommendList[1].cover_url},


      {left: 78, top:  486, width: 280, height: 154, contentImg: recommendList[2].cover_url},
      {left: 380, top: 486, width: 280, height: 154, contentImg: recommendList[3].cover_url},
      {left: 682, top: 486, width: 280, height: 154, contentImg: recommendList[4].cover_url},
      {left: 984, top: 486, width: 218, height: 154, contentImg: recommendList[5].cover_url},
    ]

    return (
      <div className={styles.contentContainer} style={{backgroundImage: `url(${tuijian})`}}>
        {
          contentImg.map((item, index) => {
            const width = item.width / 100 + 'rem';
            const height = item.height / 100 + 'rem';
            const top = item.top / 100 + 'rem';
            const left = item.left / 100 + 'rem';
            let imgStyle = {width, height, position: 'absolute', left, top}
            return <img src={`${config.resPrefix}/${item.contentImg}`} style={imgStyle} key={index}/>
          })}
        {
          localImg.map((item, index) => {
            const width = item.width / 100 + 'rem';
            const height = item.height / 100 + 'rem';
            const top = item.top / 100 + 'rem';
            const left = item.left / 100 + 'rem';
            return <img src={`${item.contentImg}`} style={{width, height, position: 'absolute', left, top}} key={index}/>
          })
        }
        {
          this.findFocus()
        }
      </div>
    )
  }
}

export default Recommend

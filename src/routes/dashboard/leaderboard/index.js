import React from "react";
import styles from './index.less'
import play from '../../../public/Imgs/dashboard/leaderboard/bofangmost.png'
import donghuapianmost from '../../../public/Imgs/dashboard/leaderboard/donghuapianmost.png'
import zaojiao from '../../../public/Imgs/dashboard/leaderboard/zaojiao.png'
import gold from '../../../public/Imgs/dashboard/leaderboard/gold.png'
import silver from '../../../public/Imgs/dashboard/leaderboard/silver.png'
import bronze from '../../../public/Imgs/dashboard/leaderboard/bronze.png'
import focus from '../../../public/Imgs/dashboard/leaderboard/focus.png'
import paihangbg from '../../../public/Imgs/dashboard/index/paihangbg.png'
import Loop from "./Loop";
import Loader from "../../../components/Loading";

const allMedals = [
  {left: 101, top: 357, width: 31, height: 39, contentImg: gold},
  {left: 481, top: 357, width: 31, height: 39, contentImg: gold},
  {left: 861, top: 357, width: 31, height: 39, contentImg: gold},
  {left: 101, top: 415, width: 31, height: 39, contentImg: silver},
  {left: 481, top: 415, width: 31, height: 39, contentImg: silver},
  {left: 861, top: 415, width: 31, height: 39, contentImg: silver},
  {left: 101, top: 473, width: 31, height: 39, contentImg: bronze},
  {left: 481, top: 473, width: 31, height: 39, contentImg: bronze},
  {left: 861, top: 473, width: 31, height: 39, contentImg: bronze},
]
const num = [
  {left: 108, top: 543, contentNum: 4, kind: 'play'},
  {left: 108, top: 602, contentNum: 5, kind: 'play'},
  {left: 489, top: 543, contentNum: 4, kind: 'weekList'},
  {left: 489, top: 602, contentNum: 5, kind: 'weekList'},
  {left: 870, top: 543, contentNum: 4, kind: 'monthlyList'},
  {left: 870, top: 602, contentNum: 5, kind: 'monthlyList'},

]

const rankPosition = [
  {
    totalList: [
      {left: 153, top: 367},
      {left: 153, top: 426},
      {left: 153, top: 485},
      {left: 153, top: 544},
      {left: 153, top: 603}
    ]
  },
  {
    weekList: [
      {left: 532, top: 367},
      {left: 532, top: 426},
      {left: 532, top: 485},
      {left: 532, top: 544},
      {left: 532, top: 603}]
  },
  {
    monthlyList: [
      {left: 912, top: 367},
      {left: 912, top: 426},
      {left: 912, top: 485},
      {left: 912, top: 544},
      {left: 912, top: 603}
    ]
  },
]


const bgFocus = [
  {left: 69, top: 335, width: 381, height: 81, bgImg: focus},
  {left: 69, top: 393, width: 381, height: 81, bgImg: focus},
  {left: 69, top: 452, width: 381, height: 81, bgImg: focus},
  {left: 69, top: 511, width: 381, height: 81, bgImg: focus},
  {left: 69, top: 570, width: 381, height: 81, bgImg: focus},

  {left: 450, top: 335, width: 381, height: 81, bgImg: focus},
  {left: 450, top: 393, width: 381, height: 81, bgImg: focus},
  {left: 450, top: 452, width: 381, height: 81, bgImg: focus},
  {left: 450, top: 511, width: 381, height: 81, bgImg: focus},
  {left: 450, top: 570, width: 381, height: 81, bgImg: focus},

  {left: 830, top: 335, width: 381, height: 81, bgImg: focus},
  {left: 830, top: 393, width: 381, height: 81, bgImg: focus},
  {left: 830, top: 452, width: 381, height: 81, bgImg: focus},
  {left: 830, top: 511, width: 381, height: 81, bgImg: focus},
  {left: 830, top: 570, width: 381, height: 81, bgImg: focus},

]

class Leaderboard extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  findFocus = () => {
    const {LeaderBoardFocusIndex} = this.props.dashboard;
    if (LeaderBoardFocusIndex == -1) {
      return
    }
    const focusImg = bgFocus[LeaderBoardFocusIndex];
    const width = focusImg.width / 100 + 'rem';
    const height = focusImg.height / 100 + 'rem';
    const top = focusImg.top / 100 + 'rem';
    const left = focusImg.left / 100 + 'rem';
    const src = focus;

    return <img src={src} style={{width, height, position: 'absolute', left, top}}/>
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
    // const payload = {LeaderBoardFocusIndex: param}
    // this.props.dispatch({type: 'dashboard/change', payload})
    if (param != -1) {
      this.props.dispatch({type: 'dashboard/change', payload: {headerBlur: true, LeaderBoardFocusIndex: param}})
    } else {
      this.props.dispatch({type: 'dashboard/change', payload: {headerBlur: false, LeaderBoardFocusIndex: param}})

    }
  }
  moveLeft = (param) => {
    const {LeaderBoardFocusIndex} = this.props.dashboard
    switch (LeaderBoardFocusIndex) {
      case 5:
        this.sendAction(0);
        break;
      case 6:
        this.sendAction(1);
        break;
      case 7:
        this.sendAction(2);
        break;
      case 8:
        this.sendAction(3);
        break;
      case 9:
        this.sendAction(4);
        break;
      case 10:
        this.sendAction(5);
        break;
      case 11:
        this.sendAction(6);
        break;
      case 12:
        this.sendAction(7);
        break;
      case 13:
        this.sendAction(8);
        break;
      case 14:
        this.sendAction(9);
        break;

    }
  }
  moveUp = (param) => {
    const {LeaderBoardFocusIndex} = this.props.dashboard
    switch (LeaderBoardFocusIndex) {
      case 0:
        this.sendAction(-1);
        break;
      case 1:
        this.sendAction(0);
        break;
      case 2:
        this.sendAction(1);
        break;
      case 3:
        this.sendAction(2);
        break;
      case 4:
        this.sendAction(3);
        break;
      case 5:
        this.sendAction(-1);
        break;
      case 6:
        this.sendAction(5);
        break;
      case 7:
        this.sendAction(6);
        break;
      case 8:
        this.sendAction(7);
        break;
      case 9:
        this.sendAction(8);
        break;
      case 10:
        this.sendAction(-1);
        break;
      case 11:
        this.sendAction(10);
        break;
      case 12:
        this.sendAction(11);
        break;
      case 13:
        this.sendAction(12);
        break;
      case 14:
        this.sendAction(13);
        break;


    }
  }
  moveDown = (param) => {
    const {LeaderBoardFocusIndex} = this.props.dashboard
    switch (LeaderBoardFocusIndex) {
      case -1:
        this.sendAction(0);
        break;
      case 0:
        this.sendAction(1);
        break;
      case 1:
        this.sendAction(2);
        break;
      case 2:
        this.sendAction(3);
        break;
      case 3:
        this.sendAction(4);
        break;
      case 4:
        this.sendAction(5);
        break;
      case 5:
        this.sendAction(6);
        break;
      case 6:
        this.sendAction(7);
        break;
      case 7:
        this.sendAction(8);
        break;
      case 8:
        this.sendAction(9);
        break;
      case 9:
        this.sendAction(10);
        break;
      case 10:
        this.sendAction(11);
        break;
      case 11:
        this.sendAction(12);
        break;
      case 12:
        this.sendAction(13);
        break;
      case 13:
        this.sendAction(14);
        break;
    }
  }
  moveRight = (payload) => {
    const {LeaderBoardFocusIndex} = this.props.dashboard
    switch (LeaderBoardFocusIndex) {
      case 0:
        this.sendAction(5);
        break;
      case 1:
        this.sendAction(6);
        break;
      case 2:
        this.sendAction(7);
        break;
      case 3:
        this.sendAction(8);
        break;
      case 4:
        this.sendAction(9);
        break;
      case 5:
        this.sendAction(10);
        break;
      case 6:
        this.sendAction(11);
        break;
      case 7:
        this.sendAction(12);
        break;
      case 8:
        this.sendAction(13);
        break;
      case 9:
        this.sendAction(14);
        break;


    }
  }
  handleEnter = () => {
    const {LeaderBoardFocusIndex, totalList, weekList, monthlyList} = this.props.dashboard;
    this.props.dispatch({
      type: 'dashboard/LeaderboardJumpPage',
      payload: {LeaderBoardFocusIndex, totalList, weekList, monthlyList,}
    })
  }
  render() {
    const {totalList, weekList, monthlyList, LeaderBoardFocusIndex} = this.props.dashboard;
    if (totalList.length <= 0 || weekList.length <= 0 || monthlyList.length <= 0) {
      return <Loader/>
    }
    let docWidth = document.documentElement.clientWidth / 1280 * 100 * 2.6;
    return (<div className={styles.contentContainer}
                 style={{backgroundImage: `url(${paihangbg})`}}
                 ref={node => this.magnet = node}>
      <span className={styles.playMost}>播放最多</span>
      <span className={styles.cartoonText}>周榜</span>
      <span className={styles.eduText}>月榜</span>
      <img className={styles.play} src={play}/>
      <img className={styles.cartoon} src={donghuapianmost}/>
      <img className={styles.childEdu} src={zaojiao}/>
      {
        allMedals.map((item, index) => {
          const width = item.width / 100 + 'rem';
          const height = item.height / 100 + 'rem';
          const top = item.top / 100 + 'rem';
          const left = item.left / 100 + 'rem';
          return <img src={item.contentImg} style={{width, height, position: 'absolute', left, top}} key={index}/>
        })
      }
      {
        num.map((item, index) => {
          const top = item.top / 100 + 'rem';
          const left = item.left / 100 + 'rem';
          const text = item.contentNum
          const color = item.kind == 'play' ? '#CA4601' : item.kind == 'weekList' ? '#A21ACC' : '#0878C2'
          return <p className={styles.text} style={{left, top, color}} key={index}>
            {text}
          </p>
        })
      }
      {
        this.findFocus()
      }
      {
        rankPosition.map((item, index) => {
          if (index == 0) {
            return item.totalList.map((playItem, playIndex) => {
              let text = totalList[playIndex].name;
              let top = playItem.top / 100 + 'rem';
              let left = playItem.left / 100 + 'rem';
              let pWidth, Animate = false;
              if (this.magnet && LeaderBoardFocusIndex != -1) {
                const els = this.magnet.getElementsByTagName('div');
                const focusElement = els[LeaderBoardFocusIndex];
                pWidth = focusElement.children[1].clientWidth;
                Animate = LeaderBoardFocusIndex == playIndex && pWidth > docWidth
              }
              let opts = {left, top, Animate, text}
              return <Loop {...opts}/>
            })
          } else if (index == 1) {
            return item.weekList.map((weekListItem, weekListIndex) => {
              const top = weekListItem.top / 100 + 'rem';
              const left = weekListItem.left / 100 + 'rem';
              let text = weekList[weekListIndex].name;
              let pWidth, Animate = false;
              if (this.magnet && LeaderBoardFocusIndex != -1) {
                const els = this.magnet.getElementsByTagName('div');
                const focusElement = els[LeaderBoardFocusIndex];
                pWidth = focusElement.children[1].clientWidth;
                Animate = LeaderBoardFocusIndex == weekListIndex + 5 && pWidth > docWidth
              }
              let opts = {left, top, Animate, text}
              return <Loop {...opts}/>
            })
          } else {
            return item.monthlyList.map((monthlyListItem, monthlyListIndex) => {
              const top = monthlyListItem.top / 100 + 'rem';
              const left = monthlyListItem.left / 100 + 'rem';
              let text = monthlyList[monthlyListIndex].name;
              let pWidth, Animate = false;
              if (this.magnet && LeaderBoardFocusIndex != -1) {
                const els = this.magnet.getElementsByTagName('div');
                const focusElement = els[LeaderBoardFocusIndex];
                pWidth = focusElement.children[1].clientWidth;
                Animate = LeaderBoardFocusIndex == monthlyListIndex + 10 && pWidth > docWidth
              }
              let opts = {left, top, Animate, text}
              return <Loop {...opts}/>
            })
          }
        })
      }
    </div>)
  }
}

export default Leaderboard

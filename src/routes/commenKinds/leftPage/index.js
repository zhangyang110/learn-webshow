import React from "react";
import styles from './index.less'
// import itemBg from '../../../public/eduImgs/commenKinds/leftPage/itemBg.png'
import focus from '../../../public/eduImgs/commenKinds/leftPage/focus.png'
import bot from '../../../public/eduImgs/commenKinds/leftPage/bot.png'
import botend from '../../../public/eduImgs/commenKinds/leftPage/botend.png'
import top from '../../../public/eduImgs/commenKinds/leftPage/top.png'
import topend from '../../../public/eduImgs/commenKinds/leftPage/topend.png'

const leftTem = [
  {left: 54, top: 182,},
  {left: 54, top: 242,},
  {left: 54, top: 302,},
  {left: 54, top: 362,},
  {left: 54, top: 422,},
  {left: 54, top: 482,},
  {left: 54, top: 542,},
]
const directAry = [
  {left: 74, top: 628, src: top, endSrc: topend},//zuo 边的
  // {left:74,top:628,src:topend},
  {left: 166, top: 628, src: bot, endSrc: botend},
  // {left:166,top:628,src:botend},
]

class KindsLeft extends React.Component {
  mapLeft = () => {
    let {leftBlur, leftIndex, leftData, moveDownTimes} = this.props;
    // jie qu chang du
    // let forRender = [];
    // if (leftData.length <= 7) {
    //   forRender = leftData;
    // }else{
    //   forRender=leftData.slice(moveDownTimes,moveDownTimes+7);
    // }
    let forRender = leftData.slice(moveDownTimes, moveDownTimes + 7);
    return forRender.map((item, index) => {
      let curTem = leftTem[index];
      let text = item.name;
      let left = curTem.left / 100 + 'rem';
      let top = curTem.top / 100 + 'rem';
      let color = leftBlur && leftIndex == index ? '#feff8f' : '#FFFFFF'
      let divStyle = {left, top, color}
      return <div className={styles.Left} style={divStyle} key={index}>
        {text}
      </div>
    })
  }
  findFocus = () => {
    let {leftBlur, leftIndex, leftData} = this.props;
    if (leftBlur) {
      return
    }
    let curTem = leftTem[leftIndex];
    let left = (curTem.left - 13) / 100 + 'rem';
    let top = (curTem.top - 13) / 100 + 'rem';
    let imgStyle = {left, top};
    return <img src={focus} style={imgStyle} className={styles.focus}/>
  }
  direct = () => {
    const {leftIndex, leftData, moveDownTimes} = this.props;
    // leftData.length - 1 == moveDownTimes + 6
    let isTop = leftIndex == 0 && moveDownTimes == 0 ? true : false;
    let isBot;
    if (leftData.length <= 7) {
      isBot = leftIndex == leftData.length - 1 ? true : false;
    } else {
      //>7
      isBot =leftData.length - 1 == moveDownTimes +leftIndex? true : false
    }
    let leftIcon = isTop ? directAry[0].endSrc : directAry[0].src;
    let rightIcon = isBot ? directAry[1].endSrc : directAry[1].src;

    return directAry.map((item, index) => {
      return <div className={styles.direct} key={index}>
        <img src={leftIcon} alt="" className={styles.leftIcon}/>
        <img src={rightIcon} alt="" className={styles.rightIcon}/>
      </div>
    })
  }

  render() {
    return (<div className={styles.leftPage}>
      {
        this.mapLeft()
      }
      {
        this.findFocus()
      }
      {
        this.direct()
      }
    </div>)
  }
}

export default KindsLeft

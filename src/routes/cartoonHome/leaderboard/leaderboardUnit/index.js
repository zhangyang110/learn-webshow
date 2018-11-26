import React from "react";
import styles from "./index.less"
import gold from '../../../../public/Imgs/dashboard/leaderboard/gold.png'
import silver from '../../../../public/Imgs/dashboard/leaderboard/silver.png'
import bronze from '../../../../public/Imgs/dashboard/leaderboard/bronze.png'
import focus from '../../../../public/Imgs/dashboard/leaderboard/focus.png'
import Loop from "../Loop";

const focusTops = [173, 231, 290, 349, 408,]
const textTops = [205, 264, 323, 382, 441];

class LeaderUnit extends React.Component {
  mapData = (data, color, kind, botIndex, animateEl) => {
    return data.map((item, index) => {
      let isFocused, Animate = false;
      let focusTop = focusTops[index] / 100 + 'rem';
      let text = data[index].name;
      if (kind == 'playmost') {
        isFocused = botIndex == index ? true : false;
        Animate = isFocused && animateEl;
        if (Animate) {
        }
      } else if (kind == 'week') {
        isFocused = botIndex == index + 5 ? true : false;
        Animate = isFocused && animateEl;
      } else if (kind == 'month') {
        isFocused = botIndex == index + 10 ? true : false;
        Animate = isFocused && animateEl;
      }
      let focusStyle = {top: focusTop, display: isFocused ? 'block' : 'none'}
      let LoopOpts = {
        left: 73 / 100 + 'rem',
        top: textTops[index] / 100 + 'rem',
        Animate,
        text
      }

      return <div key={index}>
        {
          index == 0 ? <img src={gold} alt="" className={styles.gold}/> : ''
        }
        {
          index == 1 ? <img src={silver} alt="" className={styles.silver}/> : ''
        }
        {
          index == 2 ? <img src={bronze} alt="" className={styles.bronze}/> : ''
        }
        {
          index == 3 ? <span className={styles.four} style={{color}}>4</span> : ''
        }
        {
          index == 4 ? <span className={styles.five} style={{color}}>5</span> : ''
        }
        <img src={focus} className={styles.focus} style={focusStyle} alt=""/>
        <Loop {...LoopOpts}/>
      </div>
    })
  }

  render() {
    let {botIndex, dataList, bgImg, kind, headText, tem, textPosition, animateEl, color} = this.props;
    let containerStyle = {
      left: tem.left / 100 + 'rem',
      top: tem.top / 100 + 'rem',
      backgroundImage: `url(${bgImg})`
    }
    let headTexPosition = {
      left: textPosition.left / 100 + 'rem',
      top: textPosition.top / 100 + 'rem',
    }
    return (<div className={styles.container}
                 style={containerStyle}>
      <p className={styles.headText} style={headTexPosition}>{headText}</p>
      {
        this.mapData(dataList, color, kind, botIndex, animateEl)
      }
    </div>)
  }
}

export default LeaderUnit

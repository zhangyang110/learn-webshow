import React from "react";
import styles from "./index.less"


import play from '../../../public/Imgs/dashboard/leaderboard/bofangmost.png'
import weekMost from '../../../public/Imgs/dashboard/leaderboard/donghuapianmost.png'
import month from '../../../public/Imgs/dashboard/leaderboard/zaojiao.png'

import gold from '../../../public/Imgs/dashboard/leaderboard/gold.png'
import silver from '../../../public/Imgs/dashboard/leaderboard/silver.png'
import bronze from '../../../public/Imgs/dashboard/leaderboard/bronze.png'

import focus from '../../../public/Imgs/dashboard/leaderboard/focus.png'
import paihangbg from '../../../public/Imgs/dashboard/index/paihangbg.png'
import LeaderUnit from "./leaderboardUnit";
// import LocalImg from "./localImg";


const mostTem = {
  left: 80, top: 162,
}

const weekTem = {
  left: 460, top: 162,

}
const monthTem = {
  left: 840, top: 162,
}

class LeaderBoard extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.headIndex === 3 ||nextProps.headIndex === 4|| this.props.headIndex === 3||this.props.headIndex === 4  ) {
      return true
    } else {
      return false
    }
  }
  componentWillReceiveProps(nextProps) {
    let nextIndex=nextProps.botIndex
    if(nextIndex!=this.props.botIndex){
      let maxWidth = document.documentElement.clientWidth / 1280 * 260;
      let componentIndex = 0;
      let itemIndex=nextIndex;
      if (nextIndex >= 5 && nextIndex <= 9) {
        componentIndex = 1;
        itemIndex=nextIndex-5
      } else if (nextIndex >= 10 && nextIndex <= 14) {
        componentIndex = 2;
        itemIndex=nextIndex-10
      }
      if (this.magnet.children[componentIndex].children.length >= 6&&nextIndex!=-1) {
        let pWidth = this.magnet.children[componentIndex].children[itemIndex+1].children[2].children[1].clientWidth;
        console.log(pWidth);
        console.log(maxWidth);
        if (pWidth > maxWidth) {
          this.props.addAnimate(true)
        }else{
          this.props.addAnimate(false)
        }
      }
    }

  }

  mapData = () => {
    let {botIndex, totalList, monthlyList, weekList, animateEl, visible} = this.props;
    let mostOpts = {
      botIndex,
      dataList: totalList,
      bgImg: play,
      headText: '播放最多',
      tem: mostTem,
      textPosition: {
        left: 148,
        top: 14
      },
      animateEl,
      color: '#CA4601',
      kind: 'playmost'
    }
    let weekOpts = {
      botIndex,
      dataList: weekList,
      bgImg: weekMost,
      headText: '周榜',
      tem: weekTem,
      textPosition: {
        left: 174,
        top: 14
      },
      animateEl,
      color: '#A21ACC',
      kind: 'week'
    }
    let monthOpts = {
      botIndex,
      dataList: monthlyList,
      bgImg: month,
      headText: '月榜',
      tem: monthTem,
      textPosition: {
        left: 175,
        top: 14
      },
      animateEl,
      color: '#0878C2',
      kind: 'month'
    }

    let optsAry = [mostOpts, weekOpts, monthOpts];
    return optsAry.map((opts, index) => {
      return <LeaderUnit {...opts} key={index}/>
    })

  }

  render() {


    let ClassStyle = {
      backgroundImage: `url(${paihangbg})`,
      visibility: this.props.visible ? 'visible' : 'hidden',
    }
    return (<div className={styles.container} style={ClassStyle} ref={node => this.magnet = node}>

      {
        this.mapData()
      }

    </div>)
  }
}

export default LeaderBoard

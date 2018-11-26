import React from "react";
import styles from './index.less';
import headFocus from '../../../public/eduImgs/eduHome/head/headfocus.png';

import jingxuan from '../../../public/eduImgs/eduHome/head/jingxuan.png'
import yingyou from '../../../public/eduImgs/eduHome/head/yingyou.png'
import xiaoxue from '../../../public/eduImgs/eduHome/head/xiaoxue.png'
import chuzhong from '../../../public/eduImgs/eduHome/head/chuzhong.png'
import gaozhong from '../../../public/eduImgs/eduHome/head/gaozhong.png'
import xingqu from '../../../public/eduImgs/eduHome/head/xingqu.png'
//56 28
import jingxuanFocus from '../../../public/eduImgs/eduHome/head/jingxuanfocus.png'
import yingyouFocus from '../../../public/eduImgs/eduHome/head/yingyoufocus.png'
import xiaoxueFocus from '../../../public/eduImgs/eduHome/head/xiaoxuefocus.png'
import chuzhongFocus from '../../../public/eduImgs/eduHome/head/chuzhongfocus.png'
import gaozhongFocus from '../../../public/eduImgs/eduHome/head/gaozhongfocus.png'
import xingquFocus from '../../../public/eduImgs/eduHome/head/xingqufocus.png'
//55 28
//155 65
const HeadAry = [
  {left: 145, top: 91, src: jingxuan, focusSrc: jingxuanFocus, focusBg: headFocus},
  {left: 298, top: 91, src: yingyou, focusSrc: yingyouFocus, focusBg: headFocus},
  {left: 447, top: 91, src: xiaoxue, focusSrc: xiaoxueFocus, focusBg: headFocus},
  {left: 597, top: 91, src: chuzhong, focusSrc: chuzhongFocus, focusBg: headFocus},
  {left: 747, top: 91, src: gaozhong, focusSrc: gaozhongFocus, focusBg: headFocus},
  {left: 895, top: 91, src: xingqu, focusSrc: xingquFocus, focusBg: headFocus},
]

class HomeHead extends React.Component {

  findFocus = () => {
    let {headIndex, headBlur} = this.props;
    if (headBlur) {
      return
    }
    let left = (HeadAry[headIndex].left - 50) / 100 + 'rem';
    let top = (HeadAry[headIndex].top - 18) / 100 + 'rem';
    let width = 155 / 100 + 'rem';
    let height = 65 / 100 + 'rem';
    let imgStyle = {
      left, top, width, height, position: 'absolute',
    }
    return <img src={headFocus} style={imgStyle} alt=""/>
  }

  render() {
    let {headIndex, headBlur} = this.props;

    return (<div className={styles.homeHead}>
      {
        HeadAry.map((item, index) => {
          let headFocused = index === headIndex && headBlur ? true : false;
          let left = item.left / 100 + 'rem';
          let top = item.top / 100 + 'rem';
          let src = headFocused ? item.focusSrc : item.src;
          // let width = headFocused ? 55 / 100 + 'rem' : 56 / 100 + 'rem';
          // let height = 28 / 100 + 'rem';
          let height = 30 / 100 + 'rem';

          let width = 60 / 100 + 'rem';
          let imgStyle = {
            position: 'absolute',
            left, top, width, height
          }
          return <img src={src} style={imgStyle} key={index} alt=""/>
        })
      }
      {
        this.findFocus()
      }
    </div>)
  }
}

export default HomeHead

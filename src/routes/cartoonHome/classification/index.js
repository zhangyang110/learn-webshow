import React from "react";
import styles from "./index.less"

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
import ListItem from "../../../components/listItem";

const column = [
  {left: 80, top: 163, width: 264, height: 228, contentSrc: zero, focusSrc: focus, isLocal: true},
  {left: 365, top: 163, width: 264, height: 228, contentSrc: three, focusSrc: focus, isLocal: true},
  {left: 650, top: 163, width: 264, height: 228, contentSrc: six, focusSrc: focus, isLocal: true},
  {left: 935, top: 163, width: 264, height: 228, contentSrc: women, focusSrc: focus, isLocal: true},
  {left: 80, top: 412, width: 264, height: 228, contentSrc: man, focusSrc: focus, isLocal: true},
  {left: 365, top: 412, width: 264, height: 228, contentSrc: yizhi, focusSrc: focus, isLocal: true},
  {left: 650, top: 412, width: 264, height: 228, contentSrc: maoxian, focusSrc: focus, isLocal: true},
  {left: 935, top: 412, width: 264, height: 228, contentSrc: jingdian, focusSrc: focus, isLocal: true},
]

class Classification extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.headIndex === 2 || this.props.headIndex === 2) {
      return true
    } else {
      return false
    }
  }

  render() {
    let {headIndex, botIndex, visible} = this.props;
    let ClassStyle = {
      backgroundImage: `url(${fenleibg})`,
      visibility: visible ? 'visible' : 'hidden',
    }
    return (<div className={styles.container} style={ClassStyle}>
      {
        column.map((item, index) => {
          let contentSrc = item.contentSrc;
          let left = item.left / 100 + 'rem';
          let top = item.top / 100 + 'rem';
          let width = item.width / 100 + 'rem';
          let height = item.height / 100 + 'rem';
          let divStyle = {left, top, width, height, position: 'absolute', borderRadius: '0.08rem'};

          let focusLeft = -(13 / 100) + 'rem';
          let focusTop = -(13 / 100) + 'rem';
          let focusWidth = (item.width + 26) / 100 + 'rem'
          let focusHeight = (item.height + 26) / 100 + 'rem';
          let focusSrc = item.focusSrc;
          let focused = index == botIndex ? true : false;
          let display = focused ? 'block' : 'none';
          const isLocal = item.isLocal;
          let focusStyle = {
            left: focusLeft,
            top: focusTop,
            width: focusWidth,
            height: focusHeight,
            position: 'absolute',
            display
          };

          let ItemOpts = {
            focusStyle, divStyle, focusSrc, contentSrc, isLocal
          }
          return <ListItem {...ItemOpts} key={index}/>
        })
      }

    </div>)
  }
}

export default Classification

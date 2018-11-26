import React from "react";
import styles from "./index.less"
import {config} from 'utils'
import PropTypes from 'prop-types'

const EduUnit = ({curMainTem, botIndex}) => {
  if (curMainTem.length <= 0) {
    return <div></div>
  }
  return (<div>
    {
      curMainTem.map((item, index) => {
        let src = item.contentSrc;
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
        let focusStyle = {
          left: focusLeft,
          top: focusTop,
          width: focusWidth,
          height: focusHeight,
          position: 'absolute',
          display
        };
        let imgStyle = {
          width, height
        }
        return <div style={divStyle} key={index}>
          <img src={`${config.resPrefix}/${src}`} style={imgStyle} alt=""/>
          <img src={focusSrc} style={focusStyle} alt=""/>
        </div>
      })
    }
  </div>)
}
EduUnit.propTypes = {
  curMainTem: PropTypes.array,
  botIndex: PropTypes.number,
}

export default EduUnit

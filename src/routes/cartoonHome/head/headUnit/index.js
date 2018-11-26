import React from "react";
import styles from "./index.less"

class HeadUnit extends React.Component {
  render() {
    let {width, height, left, top, text, isFocused,isCurrentHead, focusImg,searchImg} = this.props;
    let unitStyle = {
      width, height, left, top,
    }
    let textStyle={
      color:isCurrentHead?'#feff8f':'#FFFFFF'
    }
    return (<div className={styles.headUnit} style={unitStyle}>
      {
        isFocused?<img src={focusImg} className={styles.focusImg} alt=""/>:''
      }

      {
        text?<span className={styles.text} style={textStyle}>{text}</span>: <img src={searchImg} className={styles.searchImg} alt=""/>
      }
    </div>)
  }
}

export default HeadUnit

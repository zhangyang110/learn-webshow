import React from "react";
import styles from './index.less'

class Loop extends React.Component {
  render() {
    let {left, top,Animate,text} = this.props;
    return (<div className={styles.textContainer} style={{left, top}}>
      {
        Animate ? <p className={styles.Animate}>
          <span className={styles.todayScroll}>{text}</span>
          <span className={styles.todayScroll}>{text}</span>
        </p> : <p style={{whiteSpace:'nowrap'}}>{text}</p>
      }
      <p className={styles.getWidth} >{text}</p>
    </div>)
  }
}

export default Loop

import React from "react";
import styles from './index.less'

class Time extends React.Component {
  render() {
    let timePosition = this.props.timePosition;
    let time = this.props.time
    return (<div className={styles.time} style={timePosition}>{time}</div>)
  }
}

export default Time

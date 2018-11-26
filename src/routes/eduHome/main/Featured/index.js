import React from "react";
import styles from "./index.less"
import EduUnit from "../eduUnit";

class Featured extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.headIndex === 0 || this.props.headIndex === 0) {
      return true
    } else {
      return false
    }
  }

  render() {
    console.log(this.props);
    let containerSty = {
      visibility: this.props.visible ? 'visible' : 'hidden'
    }
    return (<div className={styles.container} style={containerSty}><EduUnit {...this.props}/></div>)
  }
}

export default Featured

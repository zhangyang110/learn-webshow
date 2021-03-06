import React from "react";
import styles from "./index.less"
import EduUnit from "../eduUnit";

class Interest extends React.Component{
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.headIndex===5||this.props.headIndex===5){
      return true
    }else{
      return false
    }
  }
  render() {
    let containerSty={
      visibility:this.props.visible?'visible' : 'hidden'
    }
    return (<div className={styles.container} style={containerSty}><EduUnit {...this.props}/></div>)
  }
}

export default Interest

import React from "react";
import styles from './index.less'
class TopItem extends React.Component{

      render(){
            return (<div style={this.props.divStyle}>
              <img src={this.props.src} className={styles.contentImg} alt=""/>
            </div>)
      }
}

export default TopItem

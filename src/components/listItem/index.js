import React from "react";
import styles from "./index.less"
import {config} from 'utils'

class ListItem extends React.Component {

  render() {
    let {focusStyle, divStyle, focusSrc, contentSrc, isLocal} = this.props;
    return (<div style={divStyle}>
      {
        isLocal ? <img src={contentSrc} style={{width: '100%', height: '100%'}} alt=""/> :
          <img src={`${config.resPrefix}/${contentSrc}`} style={{width: '100%', height: '100%'}} alt=""/>
      }
      <img src={focusSrc} style={focusStyle} alt=""/>
    </div>)
  }
}

export default ListItem

import React from "react";
import styles from './index.less'
import {config} from 'utils'
import carfocus from '../../../../public/Imgs/dashboard/cartoon/carfocus.png'
import classnames from 'classnames'

class CartoonUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    // let {width, height, top, left, text, Animate,src} = this.props;
    let {width, height, top, left, text, Animate, src, focused} = this.props;
    console.log(focused);
    return (<div style={{width, height, left, top, position: 'absolute'}}>
      <img src={`${config.resPrefix}/${src}`} style={{width, height}} className={styles.contentImg}/>
      <img src={carfocus} className={classnames({[styles.focusedImg]:true,[styles.focusNone]:!focused})} alt=""/>
      {
        Animate ? <div className={styles.scrollContainer}>
          <p className={styles.Animate}>
            <span className={styles.todayScroll}>{text}</span>
            <span className={styles.todayScroll}>{text}</span>
          </p>
        </div> : <p className={styles.text}>{text}</p>
      }
    </div>)
  }
}

export default CartoonUnit

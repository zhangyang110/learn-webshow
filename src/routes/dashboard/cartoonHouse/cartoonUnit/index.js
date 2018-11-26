import React from "react";
import styles from './index.less'
import {config} from 'utils'

class CartoonUnit extends React.Component {

  render() {
    let {width, height, top, left, text, Animate,src} = this.props;
    return (<div  style={{width, height, left, top, position: 'absolute', overflow: 'hidden'}} >
      <img src={`${config.resPrefix}/${src}`} style={{width, height}} className={styles.contentImg}/>
      {/*<p className={styles.opacity}>{text}</p>*/}
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

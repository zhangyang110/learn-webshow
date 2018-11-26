import React from "react";
import config from 'config'
import styles from './index.less'
import classnames from "classnames";
import focus from '../../public/eduImgs/commenKinds/rightPage/focus.png'

class Magnet extends React.Component {

  render() {
    let magnetStyle = {
      left: this.props.left,
      top: this.props.top,
    }
    let imgStyle = {
      width: '100%',
      height: '100%'
    }
    let src = this.props.src;
    let addAnimate = this.props.addAnimate;
    let text = this.props.text;
    let focused = this.props.focused;
    let display = focused ? 'block' : 'none';
    let focusStyle = {display}
    return (<div style={magnetStyle} className={styles.magnet}>
      <img src={`${config.resPrefix}/${src}`} style={imgStyle} alt=""/>
      <img src={focus} className={styles.focusImg} style={focusStyle} alt=""/>
      <div className={styles.name}>
        <p className={styles.Calculation}>{text}</p>

        <p className={classnames({[styles.loopText]: !addAnimate, [styles.loopTextAnimate]: addAnimate})}>
          <span className={styles.todayScroll}>
            {text}
          </span>
          {
            addAnimate ?
              <span className={styles.todayScroll}>
                 {text}
            </span> : ''
          }
        </p>
      </div>
    </div>)
  }
}

export default Magnet

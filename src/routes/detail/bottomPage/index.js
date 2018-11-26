import React from "react";
import styles from './index.less'
import jiantou from '../../../public/Imgs/detail/jiantou.png'
import botbg from '../../../public/Imgs/detail/botbg.png'
import botfocus from '../../../public/Imgs/detail/botfocus.png'

const template = [
  {left: 80, top: 654, width: 185, height: 34},
  {left: 267, top: 654, width: 185, height: 34},
  {left: 454, top: 654, width: 185, height: 34},
  {left: 641, top: 654, width: 185, height: 34},
  {left: 828, top: 654, width: 185, height: 34},
  {left: 1015, top: 654, width: 185, height: 34},
]

class BotPage extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    const {botForbid} = this.props.detail;
    if (botForbid) {
      return
    }
    switch (e.keyCode) {
      case 37:
        this.moveLeft()
        break;
      case 38:
        this.moveUp()
        break;
      case 39:
        this.moveRight()
        break;
    }
  }
  sendAction = (param) => {
    this.props.dispatch({type: 'detail/change', payload: {currentPage: param}})
  }
  moveLeft = () => {
    const {currentPage} = this.props.detail;
    if (currentPage >= 2) {
      this.sendAction(currentPage - 1)
    }
  }
  moveRight = () => {
    const {movieData, currentPage} = this.props.detail;
    const length = movieData.length;
    const all = Math.floor(length / 6);
    const remainder = length % 6;
    let ary = [];
    for (let i = 0; i < all; i++) {
      ary.push({start: i * 6 + 1, end: i * 6 + 6})
    }
    ary.push({start: all * 6 + 1, end: all * 6 + remainder})
    if (remainder == 0) {
      ary = ary.slice(0, ary.length - 1)
    }

    if (currentPage <= ary.length - 1) {
      this.sendAction(currentPage + 1)
    }
  }
  moveUp = () => {
    const {movieData, currentPage} = this.props.detail;
    // const flag = currentPage >= 1 && currentPage <= 3
    let num;
    if (currentPage == 1 || currentPage == 2) {
      num = 3;
      while (!movieData[(currentPage - 1) * 6 + num]) {
        num = num - 1
      }
      // this.props.dispatch({type: 'detail/change', payload: {botForbid: true, midFocus: (currentPage - 1) * 6 + num}})
    } else if (currentPage == 3 || currentPage == 4) {
      num = 4;
      while (!movieData[(currentPage - 1) * 6 + num]) {
        num = num - 1
      }
    } else if (currentPage >= 5) {
      num = 5;
      while (!movieData[(currentPage - 1) * 6 + num]) {
        num = num - 1
      }
    }
    this.props.dispatch({type: 'detail/change', payload: {botForbid: true, midFocus: (currentPage - 1) * 6 + num}})
    return
  }
  findFocus = () => {
    const {currentPage, botForbid} = this.props.detail;
    if (botForbid) {
      return
    }
    let cur;
    if (currentPage > 5) {
      cur = template[5];
    } else {
      cur = template[currentPage - 1];
    }
    const width = (cur.width + 26) / 100 + 'rem'
    const height = (cur.height+ 26) / 100 + 'rem'
    const left = (cur.left- 13) / 100 + 'rem'
    const top = (cur.top - 13) / 100 + 'rem'
    return <img src={`${botfocus}`} style={{width, height, left, top, position: 'absolute'}} />}
  mapBottom = () => {
    const {movieData, currentPage,botForbid} = this.props.detail;
    const length = movieData.length;
    const all = Math.floor(length / 6);
    //一共all+1个 小数组
    const remainder = length % 6;
    let ary = [];
    for (let i = 0; i < all; i++) {
      ary.push({start: i * 6 + 1, end: i * 6 + 6})
    }
    if (remainder != 0) {
      ary.push({start: all * 6 + 1, end: all * 6 + remainder})
    }

    let data;
    let start;
    if (currentPage > 6) {
      start = currentPage - 6;
      data = ary.slice(start, Number(start) + 6);
    } else {
      data = ary.slice(0, 6);
    }
    let findColor;
    if (currentPage > 5) {
      findColor=5
    } else {
      findColor=(currentPage-1)%6
    }

    return data.map((item, index) => {
      const cur = template[index];
      const left = cur.left / 100 + 'rem';
      const top = cur.top / 100 + 'rem';
      const width = cur.width / 100 + 'rem';
      const height = cur.height / 100 + 'rem';
      return <div style={{position: 'absolute', width, height, left, top}} key={index}>
        <img src={botbg} className={styles.botBg} alt=""/>
        <p className={styles.text} style={{
          color:`${findColor==index&&botForbid?'rgb(254, 255, 143)':'#ffffff'}`
        }}>{`${data[index].start} - ${data[index].end}`}</p>
      </div>
    })


  }

  render() {
    return (<div className={styles.container}>
      <img src={jiantou} className={styles.leftIcon}/>
      <img src={jiantou} className={styles.rightIcon}/>
      {
        this.mapBottom()
      }
      {
        this.findFocus()
      }
    </div>)
  }
}

export default BotPage

import React from "react";
import styles from './index.less'
import citie from '../../../public/Imgs/search/result/citie.png'
import focusbig from '../../../public/Imgs/search/result/focusbig.png'
import config from 'config'
import classnames from "classnames";
import Magnet from "../../../components/citie";

const template = [
  {left: 496, top: 85, width: 160, height: 240},
  {left: 677, top: 85, width: 160, height: 240},
  {left: 858, top: 85, width: 160, height: 240},
  {left: 1039, top: 85, width: 160, height: 240},
  {left: 496, top: 371, width: 160, height: 240},
  {left: 677, top: 371, width: 160, height: 240},
  {left: 858, top: 371, width: 160, height: 240},
  {left: 1039, top: 371, width: 160, height: 240},
]


class Result extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  componentDidMount() {
    setTimeout(() => {
      this.refs.result.focus()
    }, 0)
  }

  setLastPosition = (param) => {
    const payload = {lastPosition: {resultIndex: param}}
    this.props.dispatch({type: 'search/change', payload})
  }
  handleKeyDown = (e) => {
    const {focusIndex} = this.props.search;
    if (focusIndex != -1) {
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
      case 40:
        this.moveDown()
        break;
      case 13:
        this.handleEnter()
        break;
    }
  }
  sendAction = (param) => {
    const {resultIndex, resultData, currentPage} = this.props.search;
    if (param > resultData.length - 1) {
      return
    }
    if (param == -1) {
      let focus;
      switch (resultIndex) {
        case ((currentPage - 1) * 8):
          focus = 5;
          break;
        case ((currentPage - 1) * 8 + 4):
          focus = 29;
          break;
      }
      const payload = {focusIndex: focus, resultIndex: -1,}
      this.props.dispatch({type: 'search/change', payload})
      return
    } else {

      if (param > (currentPage * 8 - 1)) {
        let newPage = Number(currentPage) + 1;
        let payload = {currentPage: newPage}
        this.props.dispatch({type: 'search/change', payload})
      } else if (param < (currentPage * 8 - 8)) {
        let newPage = Number(currentPage) - 1;
        let payload = {currentPage: newPage}
        this.props.dispatch({type: 'search/change', payload})
      }

      let payload = {resultIndex: param}

      this.props.dispatch({type: 'search/change', payload})
    }

  }
  moveLeft = () => {
    const {resultIndex, currentPage} = this.props.search;
    if (resultIndex == (currentPage - 1) * 8 || resultIndex == (currentPage - 1) * 8 + 4) {
      this.sendAction(-1);
      this.setLastPosition(resultIndex);
      return
    } else {
      this.sendAction(resultIndex - 1);
      return
    }
  }
  moveUp = (param) => {
    const {resultIndex} = this.props.search
    if (resultIndex > 3) {
      this.sendAction(resultIndex - 4);
    }
  }
  moveDown = (param) => {
    const {resultIndex, resultData} = this.props.search;
    const remainder = resultData.length % 4
    if (remainder == 1) {
      if (resultIndex >= resultData.length - 4 && resultIndex <= resultData.length - 2) {
        switch (resultIndex) {
          case resultData.length - 4:
            this.sendAction(Number(resultIndex) + 3)
            break;
          case resultData.length - 3:
            this.sendAction(Number(resultIndex) + 2)
            break;
          case resultData.length - 2:
            this.sendAction(Number(resultIndex) + 1)
            break;
        }
      } else {
        this.sendAction(Number(resultIndex) + 4)
      }
    } else if (remainder == 2) {
      if (resultIndex >= resultData.length - 4 && resultIndex <= resultData.length - 3) {
        switch (resultIndex) {
          case resultData.length - 4:
            this.sendAction(Number(resultIndex) + 2)
            break;
          case resultData.length - 3:
            this.sendAction(Number(resultIndex) + 1)
            break;
        }
      } else {
        this.sendAction(Number(resultIndex) + 4)
      }
    } else if (remainder == 3) {
      if (resultIndex >= resultData.length - 4) {
        switch (resultIndex) {
          case resultData.length - 4:
            this.sendAction(Number(resultIndex) + 1)
            break;
        }
      } else {
        this.sendAction(Number(resultIndex) + 4)
      }

    } else {
      this.sendAction(Number(resultIndex) + 4)
    }


  }
  moveRight = (payload) => {
    const {resultIndex, resultData, currentPage} = this.props.search
    if (resultIndex >= resultData.length - 1 || resultIndex == (currentPage * 8 - 1)) {
      return
    }
    this.sendAction(Number(resultIndex) + 1);

  }
  handleEnter = (param) => {
    const {resultData, resultIndex} = this.props.search;
    this.props.dispatch({type: 'search/jumpPage', payload: resultData[resultIndex].id})
  }

  findFocus = () => {
    const {resultIndex} = this.props.search;
// 判断是否为当前页的最后一个  如果是最后一个 那么再判断时候还有数据  如果不是


    if (resultIndex == -1) {
      return
    }
    let newIndex = resultIndex % 8;
    const focusImg = template[newIndex]
    const width = (focusImg.width + 26) / 100 + 'rem';
    const height = (focusImg.height + 26) / 100 + 'rem';
    const top = (focusImg.top - 13) / 100 + 'rem';
    const left = (focusImg.left - 13) / 100 + 'rem';
    const src = focusbig;

    return <img src={src}
                style={{width, height, position: 'absolute', left, top}}/>
  }
  mapData = () => {
    const {total, resultData, totalPage, resultIndex, currentPage} = this.props.search;
    // const lastLength = resultData.length - currentPage * 8;
    // let data;
    // if (lastLength > 0) {
    //   data = resultData.slice(`${(currentPage - 1) * 8}`, `${(currentPage - 1) * 8 + 8}`)
    // } else {
    //   data = resultData.slice(`${(currentPage - 1) * 8}`, `${(currentPage - 1) * 8 - lastLength}`)
    // }
    let data;
    data = resultData.slice(`${(currentPage - 1) * 8}`, `${(currentPage - 1) * 8 + 8}`)
    return data.map((item, index) => {
      let newIndex;
      if (index > 7) {
        newIndex = index % 8;
      } else {
        newIndex = index
      }
      const width = template[newIndex].width / 100 + 'rem';
      const height = template[newIndex].height / 100 + 'rem';
      const left = template[newIndex].left / 100 + 'rem';
      const top = template[newIndex].top / 100 + 'rem';
      const src = item.cover_url;
      const text = item.name;
      let addAnimate = resultIndex == Number(index) + (currentPage - 1) * 8 && item.name.length >= 10;
      let opts={
        src,
        left,
        top,
        addAnimate,
        text
      }
      return <Magnet {...opts} key={index}/>
    })

  }

  render() {
    const {total, resultData, totalPage, resultIndex, currentPage} = this.props.search;
    return (<div className={styles.resultContainer} ref='result' onKeyDown={this.handleKeyDown} tabIndex='-1'>
      <p className={styles.totalText}>共{total}个结果：</p>
      <p className={styles.last}>上一页</p>
      <p className={styles.page}>{`${currentPage}/${totalPage}`}</p>
      <p className={styles.next}>上一页</p>

      {
        this.mapData()
      }
      {
        this.findFocus()
      }


    </div>)
  }
}

export default Result

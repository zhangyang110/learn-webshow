import React from "react";
import styles from './index.less';
import {connect} from 'dva'
import KindsLeft from "./leftPage";
import KindsRight from "./rightPage";
import bg from '../../public/eduImgs/commenKinds/index/bg.png'
import TotalPage from "./totalPage";
import login from "../../models/login";

class CommenKinds extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    let {leftBlur} = this.props.commenKinds;
    let focusAt;
    leftBlur ? focusAt = 1 : focusAt = 0;

    switch (e.keyCode) {
      case 37:
        leftBlur && this.moveLeft()
        break;
      case 38:
        this.moveUp(focusAt)
        break;
      case 39:
        this.moveRight(focusAt)
        break;
      case 40:
        this.moveDown(focusAt)
        break;
      case 13:
        leftBlur && this.handleEnter()
        break;
    }

  }
  handleEnter = () => {
    const {rightIndex, rightData, currentPage} = this.props.commenKinds;
    let dataIndex = (currentPage - 1) * 10 + rightIndex;
    let curData = rightData[dataIndex];
    console.log(curData);
    this.props.dispatch({type: 'commenKinds/kindJumpPage', payload: curData.id})
  }
  moveLeft = () => {
    let {rightIndex} = this.props.commenKinds;
    let flag = rightIndex == 0 || rightIndex == 5;
    !flag && this.sendAction({rightIndex: rightIndex - 1})
    flag && this.sendAction({leftBlur: false})
  }
  moveRight = (param) => {
    let {rightIndex, currentPage, rightData} = this.props.commenKinds;
    if (param == 0) {
      this.sendAction({leftBlur: true, rightIndex: 0})
    } else {
      let flag = rightIndex < 9 && (currentPage - 1) * 10 + rightIndex < rightData.length - 1
      flag && this.sendAction({rightIndex: rightIndex + 1});
    }
  }
  moveUp = (param) => {
    let {rightIndex, currentPage, leftIndex, leftData} = this.props.commenKinds;
    // let {leftBlur, leftIndex, rightIndex, leftData, rightData, currentPage, totalPage} = this.props.commenKinds;
    if (param == 1) {
      rightIndex >= 5 && this.sendAction({rightIndex: rightIndex - 5})
      let flag = rightIndex <= 4 && currentPage > 1;
      flag && this.sendAction({currentPage: currentPage - 1, rightIndex: rightIndex + 5})
    } else {
      ///left page 上移  逻辑
      this.leftMoveUp()
    }
  }
  leftMoveUp = () => {
    let {rightIndex, currentPage, leftIndex, leftData, moveDownTimes} = this.props.commenKinds;
    let isOverFlow = leftData.length > 7;
    if (!isOverFlow) {
      leftIndex >= 1 && this.sendAction({leftIndex: leftIndex - 1})
    } else {
      // 超过 了 7跳数据向上移动焦点
      if (moveDownTimes == 0) {
        leftIndex >= 1 && this.sendAction({leftIndex: leftIndex - 1})
      } else {

        //  xiangxia  yi 动过
        leftIndex == 0 && this.sendAction({moveDownTimes: moveDownTimes - 1})
        leftIndex != 0 && this.sendAction({leftIndex: leftIndex - 1})
      }
    }
  }
  moveDown = (param) => {
    console.log(1111111);
    let {rightIndex, currentPage, leftIndex} = this.props.commenKinds;
    if (param == 1) {
      let isRowOne = rightIndex <= 4;
      if (isRowOne) {
        let RowTwoHaveData = isRowOne && this.findData((currentPage - 1) * 10 + rightIndex + 5);
        if (RowTwoHaveData) {
          this.sendAction({rightIndex: this.findData((currentPage - 1) * 10 + rightIndex + 5)})
        }
      } else {
        // dierhang  下移逻辑
        let nextPageHaveData = !isRowOne && this.findNextPageData(currentPage * 10 + rightIndex - 5);
        console.log(nextPageHaveData);
        if (nextPageHaveData || nextPageHaveData === 0) {
          // console.log(nextPageHaveData);
          // console.log(currentPage);
          this.sendAction({
            rightIndex: this.findNextPageData(currentPage * 10 + rightIndex - 5),
            currentPage: currentPage + 1
          })
        }
      }

    } else {
      // 左边栏下移逻辑
      this.leftMoveDown()

    }
  }
  leftMoveDown = () => {
    let {rightIndex, currentPage, leftIndex, leftData, moveDownTimes} = this.props.commenKinds;
    let isOverFlow = leftData.length > 7;
    if (!isOverFlow) {
      leftIndex < leftData.length - 1 && this.sendAction({leftIndex: leftIndex + 1})
    } else {
      // shuju  超过七条
      leftIndex != 6 && this.sendAction({leftIndex: leftIndex + 1})
      let haveData = this.findNextData(moveDownTimes + 7);
      leftIndex == 6 && haveData && this.sendAction({moveDownTimes: moveDownTimes + 1})
    }
  }
  findNextData = (param) => {
    let {leftData} = this.props.commenKinds;
    if (param > leftData.length - 1) {
      return false
    } else {
      return true
    }
  }
  findData = (param) => {
    let {currentPage, rightData} = this.props.commenKinds;
    if (param <= rightData.length - 1) {
      // return param % 5+5
      return param % 10
    }
    let target = param;
    while (target > rightData.length - 1) {
      target--
    }
    // 终值 是否在第一行
    // let isRowOne = target >= (currentPage - 1) * 10 && target <= (currentPage - 1) * 10 + 4;
    let isRowTwo = target >= (currentPage - 1) * 10 + 5 && target <= (currentPage - 1) * 10 + 9;
    // return isRowTwo
    if (isRowTwo) {
      // return target% 5 + 5
      return target % 10
    } else {
      return false
    }
  }
  findNextPageData = (param) => {
    let {currentPage, rightData} = this.props.commenKinds;
    if (param <= rightData.length - 1) {
      return param % 10
    }
    let target = param;
    while (target > rightData.length - 1) {
      target--
    }
    let isRowOne = target % 10 <= 4;
    if (isRowOne) {
      return target % 10
    } else {
      return false
    }


  }
  sendAction = (param) => {
    this.props.dispatch({type: 'commenKinds/change', payload: param});
    let {leftIndex, moveDownTimes} = this.props.commenKinds;
    let curIndex = ('leftIndex' in param&&param.leftIndex + moveDownTimes) ||( 'moveDownTimes' in param &&leftIndex + param.moveDownTimes);

    if('leftIndex' in param||'moveDownTimes' in param){
      setTimeout(() => {
        let {leftIndex, moveDownTimes} = this.props.commenKinds;
        let nextIndex = leftIndex + moveDownTimes;
        if (nextIndex == curIndex) {
          this.getData(nextIndex);
        }
      }, 500)
    }

  }
  getData = (nextIndex) => {
    let {leftData,} = this.props.commenKinds;
    let curData = leftData[nextIndex];
    this.props.dispatch({type: 'commenKinds/getRightData', payload: curData})
  }
  render() {
    let {leftBlur, leftIndex, rightIndex, leftData, rightData, currentPage, totalPage, moveDownTimes} = this.props.commenKinds;
    let totalOpts = {
      currentPage, totalPage
    }
    let leftOpts = {
      leftBlur, leftIndex, leftData, moveDownTimes
    }
    let rightOpts = {
      rightIndex, rightData, currentPage, totalPage, leftBlur
    }
    // if (leftData.length <= 0 || rightData.length <= 0) {
    //   return <div>Loading</div>
    // }
    return (<div style={{backgroundImage: `url(${bg})`}} className={styles.container}>
      <KindsLeft {...leftOpts}/>
      <KindsRight {...rightOpts}/>
      <TotalPage {...totalOpts}/>
    </div>)
  }
}

export default connect((commenKinds) => (commenKinds))(CommenKinds)

import React from "react";
import {connect} from "dva/index";
import {config} from 'utils'
import carhead from '../../../public/Imgs/dashboard/cartoon/carhead.png'
import carfocus from '../../../public/Imgs/dashboard/cartoon/carfocus.png'
import connect1 from '../../../public/Imgs/dashboard/cartoon/connect1.png'
import connect2 from '../../../public/Imgs/dashboard/cartoon/connect2.png'
import styles from './index.less'
import carToonBg from '../../../public/Imgs/dashboard/index/donghuawubg.png'
import CartoonUnit from "./cartoonUnit";
import Loader from "../../../components/Loading";


const bgColumn = [
  {left: 298, top: 152, width: 226, height: 253, bgImg: carfocus},
  {left: 525, top: 152, width: 226, height: 253, bgImg: carfocus},
  {left: 754, top: 152, width: 226, height: 253, bgImg: carfocus},
  {left: 982, top: 152, width: 226, height: 253, bgImg: carfocus},
  {left: 70, top: 401, width: 226, height: 253, bgImg: carfocus},
  {left: 298, top: 401, width: 226, height: 253, bgImg: carfocus},
  {left: 525, top: 401, width: 226, height: 253, bgImg: carfocus},
  {left: 753, top: 401, width: 226, height: 253, bgImg: carfocus},
  {left: 981, top: 401, width: 226, height: 253, bgImg: carfocus},
]
const LocalImg = [
  {left: 80, top: 209, width: 224, height: 183, contentImg: carhead},
  {left: 292, top: 338, width: 37, height: 24, contentImg: connect2},
  {left: 495, top: 338, width: 60, height: 5, contentImg: connect1},
  {left: 724, top: 338, width: 60, height: 5, contentImg: connect1},
  {left: 952, top: 338, width: 60, height: 5, contentImg: connect1},
  {left: 268, top: 586, width: 60, height: 5, contentImg: connect1},
  {left: 496, top: 586, width: 60, height: 5, contentImg: connect1},
  {left: 724, top: 586, width: 60, height: 5, contentImg: connect1},
  {left: 952, top: 586, width: 60, height: 5, contentImg: connect1},
]

class CartoonHouse extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
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
    this.props.dispatch({
      type: 'dashboard/change',
      payload: {headerBlur: param != -1 ? true : false, cartoonFocusIndex: param}
    })

    // if (param != -1) {
    //   this.props.dispatch({type: 'dashboard/change', payload: {headerBlur: param != -1?true:false, cartoonFocusIndex: param}})
    // } else {
    //   this.props.dispatch({type: 'dashboard/change', payload: {headerBlur: false, cartoonFocusIndex: param}})
    // }
  }
  moveLeft = (param) => {
    const {cartoonFocusIndex} = this.props.dashboard
    switch (cartoonFocusIndex) {
      case 1:
        this.sendAction(0);
        break;
      case 2:
        this.sendAction(1);
        break;
      case 3:
        this.sendAction(2);
        break;
      case 4:
        this.sendAction(3);
        break;
      case 5:
        this.sendAction(4);
        break;
      case 6:
        this.sendAction(5);
        break;
      case 7:
        this.sendAction(6);
        break;
      case 8:
        this.sendAction(7);
        break;
    }
  }
  moveUp = (param) => {
    const {cartoonFocusIndex} = this.props.dashboard;
    if (cartoonFocusIndex != -1) {
      let ary = [-1, -1, -1, -1, 0, 0, 1, 2, 3];
      this.sendAction(ary[cartoonFocusIndex]);
    }
    // switch (cartoonFocusIndex) {
    //   case 0:
    //     this.sendAction(-1);
    //     break;
    //   case 1:
    //     this.sendAction(-1);
    //     break;
    //   case 2:
    //     this.sendAction(-1);
    //     break;
    //   case 3:
    //     this.sendAction(-1);
    //     break;
    //   case 4:
    //     this.sendAction(0);
    //     break;
    //   case 5:
    //     this.sendAction(0);
    //     break;
    //   case 6:
    //     this.sendAction(1);
    //     break;
    //   case 7:
    //     this.sendAction(2);
    //     break;
    //   case 8:
    //     this.sendAction(3);
    //     break;
    // }
  }
  moveDown = (param) => {
    const {cartoonFocusIndex} = this.props.dashboard;
    switch (cartoonFocusIndex) {
      case -1:
        this.sendAction(0);
        break;
      case 0:
        this.sendAction(5);
        break;
      case 1:
        this.sendAction(6);
        break;
      case 2:
        this.sendAction(7);
        break;
      case 3:
        this.sendAction(8);
        break;
    }
  }
  moveRight = (payload) => {
    const {cartoonFocusIndex} = this.props.dashboard
    switch (cartoonFocusIndex) {
      case 0:
        this.sendAction(1);
        break;
      case 1:
        this.sendAction(2);
        break;
      case 2:
        this.sendAction(3);
        break;
      case 3:
        this.sendAction(4);
        break;
      case 4:
        this.sendAction(5);
        break;
      case 5:
        this.sendAction(6);
        break;
      case 6:
        this.sendAction(7);
        break;
      case 7:
        this.sendAction(8);
        break;
    }
  }
  handleEnter = (param) => {
    const {cartoonFocusIndex} = this.props.dashboard;
    this.jumpPage(cartoonFocusIndex)
    // if (cartoonFocusIndex == -1) {
    //   return
    // }
    // this.jumpPage(cartoonFocusIndex)
  }
  jumpPage = (param) => {
    const {cartoonHouseData} = this.props.dashboard;
    this.props.dispatch({type: 'dashboard/carToonJumpPage', payload: cartoonHouseData[param]})
  }
  findFocus = () => {
    const {cartoonFocusIndex} = this.props.dashboard;
    if (cartoonFocusIndex == -1) {
      return
    }
    const focusImg = bgColumn[cartoonFocusIndex];
    const width = focusImg.width / 100 + 'rem';
    const height = focusImg.height / 100 + 'rem';
    const top = focusImg.top / 100 + 'rem';
    const left = focusImg.left / 100 + 'rem';
    const src = focusImg.bgImg;
    return <img src={src} style={{width, height, position: 'absolute', left, top}}/>
  }

  render() {
    const {cartoonHouseData, cartoonFocusIndex} = this.props.dashboard;
    if (cartoonHouseData.length <= 0) {
      return <Loader/>
    }
    const column = [
      {
        left: 315,
        top: 170,
        width: 192,
        height: 218,
        contentImg: cartoonHouseData[0].cover_url,
        contentText: cartoonHouseData[0].object_name
      },
      {
        left: 543,
        top: 170,
        width: 192,
        height: 218,
        contentImg: cartoonHouseData[1].cover_url,
        contentText: cartoonHouseData[1].object_name
      },
      {
        left: 771,
        top: 170,
        width: 192,
        height: 218,
        contentImg: cartoonHouseData[2].cover_url,
        contentText: cartoonHouseData[2].object_name
      },
      {
        left: 999,
        top: 170,
        width: 192,
        height: 218,
        contentImg: cartoonHouseData[3].cover_url,
        contentText: cartoonHouseData[3].object_name
      },
      {
        left: 87,
        top: 419,
        width: 192,
        height: 218,
        contentImg: cartoonHouseData[4].cover_url,
        contentText: cartoonHouseData[4].object_name
      },
      {
        left: 315,
        top: 419,
        width: 192,
        height: 218,
        contentImg: cartoonHouseData[5].cover_url,
        contentText: cartoonHouseData[5].object_name
      },
      {
        left: 543,
        top: 419,
        width: 192,
        height: 218,
        contentImg: cartoonHouseData[6].cover_url,
        contentText: cartoonHouseData[6].object_name
      },
      {
        left: 771,
        top: 419,
        width: 192,
        height: 218,
        contentImg: cartoonHouseData[7].cover_url,
        contentText: cartoonHouseData[7].object_name
      },
      {
        left: 999,
        top: 419,
        width: 192,
        height: 218,
        contentImg: cartoonHouseData[8].cover_url,
        contentText: cartoonHouseData[8].object_name
      },
    ];

    return (<div className={styles.contentContainer}>
      {
        column.map((item, index) => {
          const width = item.width / 100 + 'rem';
          const height = item.height / 100 + 'rem';
          const top = item.top / 100 + 'rem';
          const left = item.left / 100 + 'rem';
          const text = item.contentText || '';
          let src = item.contentImg
         let Animate = cartoonFocusIndex == index && text.length > 6;
          let opts = {
            width, height, top, left, text, Animate, src
          }
          return <CartoonUnit {...opts} key={index}/>
        })
      }
      {
        LocalImg.map((item, index) => {
          const width = item.width / 100 + 'rem';
          const height = item.height / 100 + 'rem';
          const top = item.top / 100 + 'rem';
          const left = item.left / 100 + 'rem';
          return <div key={index} style={{width, height, position: 'absolute', left, top}}>
            <img src={item.contentImg} style={{width, height}} className={styles.contentImg} alt=""/>
          </div>
        })
      }
      {
        this.findFocus()
      }
    </div>)
  }
}

export default CartoonHouse

import React from "react";
import styles from './index.less'

import search from '../../../public/eduImgs/eduHome/top/search.png'
import history from '../../../public/eduImgs/eduHome/top/history.png'
import collect from '../../../public/eduImgs/eduHome/top/collect.png'

import searchFocus from '../../../public/eduImgs/eduHome/top/searchfocus.png'
import historyFocus from '../../../public/eduImgs/eduHome/top/historyfocus.png'
import collectFocus from '../../../public/eduImgs/eduHome/top/collectfocus.png'
import TopItem from "./item";

// let topAry = [
//   {
//     left: 1037,
//     top: 41,
//     width: 25,
//     height: 25,
//     src: search,
//     focusWidth: 45,
//     focusHeight: 44,
//     focusLeft: 1027,
//     focusTop: 31,
//     focusSrc: searchFocus,
//   },
//   {
//     left: 1083,
//     top: 40,
//     width: 27,
//     height: 25,
//     src: history,
//     focusWidth: 49,
//     focusHeight: 46,
//     focusLeft: 1072,
//     focusTop: 30,
//     focusSrc: historyFocus
//   },
//   {
//     left: 1131,
//     top: 42,
//     width: 26,
//     height: 24,
//     src: collect,
//     focusWidth: 46,
//     focusHeight: 43,
//     focusLeft: 1121,
//     focusTop: 32,
//     focusSrc: collectFocus
//   },
// ]
let topAry = [
  {
    left: 1022,
    top: 28,
    width: 50,
    height: 50,
    src: search,
    // focusWidth: 45,
    // focusHeight: 44,
    // focusLeft: 1027,
    // focusTop: 31,
    focusSrc: searchFocus,
  },
  {
    left: 1072,
    top: 28,
    width: 50,
    height: 50,
    src: history,
    // focusWidth: 49,
    // focusHeight: 46,
    // focusLeft: 1072,
    // focusTop: 30,
    focusSrc: historyFocus
  },
  {
    left: 1122,
    top: 28,
    width: 50,
    height: 50,
    src: collect,
    // focusWidth: 46,
    // focusHeight: 43,
    // focusLeft: 1121,
    // focusTop: 32,
    focusSrc: collectFocus
  },
]
class HomeTop extends React.Component {

  render() {
    let {topIndex}=this.props;
    return (<div className={styles.top}>
      {
        topAry.map((item, index) => {
          let isFocused = index == topIndex ? true : false;
          // let width = isFocused ? item.focusWidth / 100 + 'rem' : item.width / 100 + 'rem';
          // let height = isFocused ? item.focusHeight / 100 + 'rem' : item.height / 100 + 'rem';
          // let left = isFocused ? item.focusLeft / 100 + 'rem' : item.left / 100 + 'rem';
          // let top = isFocused ? item.focusTop / 100 + 'rem' : item.top / 100 + 'rem';


          let width = item.width / 100 + 'rem';
          let height = item.height / 100 + 'rem';
          let left = item.left / 100 + 'rem';
          let top =  item.top / 100 + 'rem';
          let src = isFocused ? item.focusSrc : item.src;
          let divStyle = {
            width, height, left, top, position: 'absolute'
          }
          let opts = {
            divStyle,
            src
          }
          return <TopItem {...opts} key={index}/>
        })
      }
    </div>)
  }
}

export default HomeTop

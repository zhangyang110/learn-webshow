import React from "react";
import {connect} from 'dva'
import styles from './index.less'
import Hot from "./hot";
import NotFound from "./notfound";
import Result from "./result";

import bg from '../../public/Imgs/search/index/bg.jpg'
import search from '../../public/Imgs/search/index/search.png'
import line from '../../public/Imgs/search/index/line.png'
import exclamation from '../../public/Imgs/search/notfound/exclamation.png'
import searchbtn from '../../public/Imgs/search/index/searchbtn.png'
import nonebtn from '../../public/Imgs/search/index/nonebtn.png'
import del from '../../public/Imgs/search/index/delete.png'
import focus1 from '../../public/Imgs/search/index/focus1.png'
import middlefocus from '../../public/Imgs/search/index/middlefocus.png'
import bigfocus from '../../public/Imgs/search/index/bigfocus.png'

import A from '../../public/Imgs/search/index/A.png'
import B from '../../public/Imgs/search/index/B.png'
import C from '../../public/Imgs/search/index/C.png'
import D from '../../public/Imgs/search/index/D.png'
import E from '../../public/Imgs/search/index/E.png'
import F from '../../public/Imgs/search/index/F.png'
import G from '../../public/Imgs/search/index/G.png'
import H from '../../public/Imgs/search/index/H.png'
import I from '../../public/Imgs/search/index/I.png'
import J from '../../public/Imgs/search/index/J.png'
import K from '../../public/Imgs/search/index/K.png'
import L from '../../public/Imgs/search/index/L.png'
import M from '../../public/Imgs/search/index/M.png'
import N from '../../public/Imgs/search/index/N.png'
import O from '../../public/Imgs/search/index/O.png'
import P from '../../public/Imgs/search/index/P.png'
import Q from '../../public/Imgs/search/index/Q.png'
import R from '../../public/Imgs/search/index/R.png'
import S from '../../public/Imgs/search/index/S.png'
import T from '../../public/Imgs/search/index/T.png'
import U from '../../public/Imgs/search/index/U.png'
import V from '../../public/Imgs/search/index/V.png'
import W from '../../public/Imgs/search/index/W.png'
import X from '../../public/Imgs/search/index/X.png'
import Y from '../../public/Imgs/search/index/Y.png'
import Z from '../../public/Imgs/search/index/Z.png'
import num1 from '../../public/Imgs/search/index/1.png'
import num2 from '../../public/Imgs/search/index/2.png'
import num3 from '../../public/Imgs/search/index/3.png'
import num4 from '../../public/Imgs/search/index/4.png'
import num5 from '../../public/Imgs/search/index/5.png'
import num6 from '../../public/Imgs/search/index/6.png'
import num7 from '../../public/Imgs/search/index/7.png'
import num8 from '../../public/Imgs/search/index/8.png'
import num9 from '../../public/Imgs/search/index/9.png'
import num0 from '../../public/Imgs/search/index/0.png'

const btnColumn = [
  {left: 81, top: 202, width: 44, height: 44, contentImg: A, bgImg: focus1},
  {left: 141, top: 202, width: 44, height: 44, contentImg: B, bgImg: focus1},
  {left: 202, top: 202, width: 44, height: 44, contentImg: C, bgImg: focus1},
  {left: 261, top: 202, width: 44, height: 44, contentImg: D, bgImg: focus1},
  {left: 321, top: 202, width: 44, height: 44, contentImg: E, bgImg: focus1},
  {left: 381, top: 202, width: 44, height: 44, contentImg: F, bgImg: focus1},

  {left: 81, top: 262, width: 44, height: 44, contentImg: G, bgImg: focus1},
  {left: 141, top: 262, width: 44, height: 44, contentImg: H, bgImg: focus1},
  {left: 202, top: 262, width: 44, height: 44, contentImg: I, bgImg: focus1},
  {left: 261, top: 262, width: 44, height: 44, contentImg: J, bgImg: focus1},
  {left: 321, top: 262, width: 44, height: 44, contentImg: K, bgImg: focus1},
  {left: 381, top: 262, width: 44, height: 44, contentImg: L, bgImg: focus1},

  {left: 81, top: 322, width: 44, height: 44, contentImg: M, bgImg: focus1},
  {left: 141, top: 322, width: 44, height: 44, contentImg: N, bgImg: focus1},
  {left: 202, top: 322, width: 44, height: 44, contentImg: O, bgImg: focus1},
  {left: 261, top: 322, width: 44, height: 44, contentImg: P, bgImg: focus1},
  {left: 321, top: 322, width: 44, height: 44, contentImg: Q, bgImg: focus1},
  {left: 381, top: 322, width: 44, height: 44, contentImg: R, bgImg: focus1},

  {left: 81, top: 382, width: 44, height: 44, contentImg: S, bgImg: focus1},
  {left: 141, top: 382, width: 44, height: 44, contentImg: T, bgImg: focus1},
  {left: 202, top: 382, width: 44, height: 44, contentImg: U, bgImg: focus1},
  {left: 261, top: 382, width: 44, height: 44, contentImg: V, bgImg: focus1},
  {left: 321, top: 382, width: 44, height: 44, contentImg: W, bgImg: focus1},
  {left: 381, top: 382, width: 44, height: 44, contentImg: X, bgImg: focus1},

  {left: 81, top: 442, width: 44, height: 44, contentImg: Y, bgImg: focus1},
  {left: 141, top: 442, width: 44, height: 44, contentImg: Z, bgImg: focus1},
  {left: 202, top: 442, width: 44, height: 44, contentImg: num1, bgImg: focus1},
  {left: 261, top: 442, width: 44, height: 44, contentImg: num2, bgImg: focus1},
  {left: 321, top: 442, width: 44, height: 44, contentImg: num3, bgImg: focus1},
  {left: 381, top: 442, width: 44, height: 44, contentImg: num4, bgImg: focus1},

  {left: 81, top: 502, width: 44, height: 44, contentImg: num5, bgImg: focus1},
  {left: 141, top: 502, width: 44, height: 44, contentImg: num6, bgImg: focus1},
  {left: 202, top: 502, width: 44, height: 44, contentImg: num7, bgImg: focus1},
  {left: 261, top: 502, width: 44, height: 44, contentImg: num8, bgImg: focus1},
  {left: 321, top: 502, width: 44, height: 44, contentImg: num9, bgImg: focus1},
  {left: 381, top: 502, width: 44, height: 44, contentImg: num0, bgImg: focus1},

  {left: 81, top: 562, width: 105, height: 44, contentImg: del, bgImg: middlefocus},
  {left: 202, top: 562, width: 105, height: 44, contentImg: nonebtn, bgImg: middlefocus},
  {left: 323, top: 562, width: 105, height: 44, contentImg: searchbtn, bgImg: middlefocus},
]

class Search extends React.Component {
  componentDidMount() {
    this.refs.search.focus();
  }

  // componentWillUnmount() {
  //
  // }

  handleKeyDown = (e) => {
    const {hotRecommend, notFoundFocus, resultIndex} = this.props.search;
    const flag = notFoundFocus != -1 || hotRecommend != -1 || resultIndex != -1
    if (flag) {
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
    const {find, lastPosition, focusIndex, currentPage, resultData,} = this.props.search;
    if (param == -1 && find == 'tuiJian') {
      const payload = {focusIndex: -1, hotRecommend: 0}
      this.props.dispatch({type: 'search/change', payload})
      return
    } else if (param == -1 && find == 'notFound') {
      // const payload = {focusIndex: -1}
      this.props.dispatch({type: 'search/change', payload: {focusIndex: -1, notFoundFocus: 0}})
      return
    } else if (param == -1 && find == 'result') {
      const isTopBtn = focusIndex == 5 || focusIndex == 11 || focusIndex == 17
      const isBottomBtn = focusIndex == 23 || focusIndex == 29 || focusIndex == 35 || focusIndex == 38
      if (isTopBtn || (currentPage - 1) * 8 + 4 > resultData.length - 1) {
        const payload = {focusIndex: -1, resultIndex: (currentPage - 1) * 8}
        this.props.dispatch({type: 'search/change', payload})
        return
      } else if (isBottomBtn) {
        const payload = {focusIndex: -1, resultIndex: (currentPage - 1) * 8 + 4}
        this.props.dispatch({type: 'search/change', payload})
        return
      }


      // if (isTopBtn) {
      //   if (lastPosition.resultIndex == (currentPage - 1) * 8 + 4) {
      //     const payload = {focusIndex: -1, resultIndex: lastPosition.resultIndex - 4}
      //     this.props.dispatch({type: 'search/change', payload})
      //     return
      //   }
      //   const payload = {focusIndex: -1, resultIndex: lastPosition.resultIndex || -1}
      //   this.props.dispatch({type: 'search/change', payload})
      //   return
      //
      // } else if (isBottomBtn) {
      //   if (lastPosition.resultIndex == (currentPage - 1) * 8) {
      //     let toIndex = Number(lastPosition.resultIndex) + 4;
      //     if (toIndex > resultData.length - 1) {
      //       toIndex = lastPosition.resultIndex
      //     }
      //     const payload = {focusIndex: -1, resultIndex: toIndex || 0}
      //     this.props.dispatch({type: 'search/change', payload})
      //     return
      //   }
      //   const payload = {focusIndex: -1, resultIndex: Number(lastPosition.resultIndex) || 0}
      //   this.props.dispatch({type: 'search/change', payload})
      //   return
      // }
    }
    const payload = {focusIndex: param}
    this.props.dispatch({type: 'search/change', payload})
  }
  moveLeft = (param) => {
    const {focusIndex} = this.props.search
    if (focusIndex >= 1 && focusIndex <= 38) {
      this.sendAction(focusIndex - 1);
      return
    }
  }
  moveUp = (param) => {
    const {focusIndex} = this.props.search;
    if (focusIndex > 5 && focusIndex <= 35) {
      this.sendAction(Number(focusIndex) - 6);
      return
    } else if (focusIndex == 36) {
      this.sendAction(30);
      return
    } else if (focusIndex == 37) {
      this.sendAction(32);
      return
    } else if (focusIndex == 38) {
      this.sendAction(34);
      return
    }
  }
  moveDown = (param) => {
    const {focusIndex} = this.props.search;
    if (focusIndex >= 0 && focusIndex <= 29) {
      this.sendAction(Number(focusIndex) + 6);
      return
    } else if (focusIndex == 30 || focusIndex == 31) {
      this.sendAction(36);
      return
    } else if (focusIndex == 32 || focusIndex == 33) {
      this.sendAction(37);
      return
    } else if (focusIndex == 34 || focusIndex == 35) {
      this.sendAction(38);
      return
    }
  }
  moveRight = (payload) => {
    const {focusIndex} = this.props.search;
    const isTopBtn = focusIndex == 5 || focusIndex == 11 || focusIndex == 17
    const isBottomBtn = focusIndex == 23 || focusIndex == 29 || focusIndex == 35 || focusIndex == 38
    const flag = isTopBtn || isBottomBtn;
    if (flag) {
      this.sendAction(-1);
      return
    } else if (focusIndex >= 0 && focusIndex < 38) {
      this.sendAction(Number(focusIndex) + 1);
      return
    }
  }
  changeKeyWord = (param) => {
    const {keyWord} = this.props.search;
    if (keyWord.length >= 19) {
      return
    }
    const newWord = keyWord + param
    const payload = {keyWord: newWord}
    this.props.dispatch({type: 'search/change', payload})
  }
  delKeyWord = () => {
    const {keyWord} = this.props.search;
    if (keyWord.length <= 1) {
      const payload = {
        keyWord: '',
        find: 'tuiJian',
        hotRecommend: -1,
        notFoundFocus: -1,
        resultIndex: -1,
        total: '',
        resultData: [],
        modalVisible: false,
        totalPage: '',
        currentPage: 1,
        lastPosition: '',
        // recommendData: []
      }
      this.props.dispatch({type: 'search/change', payload})
      return
    }
    const newWord = keyWord.slice(0, keyWord.length - 1)
    const payload = {keyWord: newWord}
    this.props.dispatch({type: 'search/change', payload})
  }
  clearKeyWord = () => {
    const payload = {
      keyWord: '',
      find: 'tuiJian',
      hotRecommend: -1,
      notFoundFocus: -1,
      resultIndex: -1,
      total: '',
      resultData: [],
      modalVisible: false,
      totalPage: '',
      currentPage: 1,
      lastPosition: '',
      // recommendData: []
    }
    this.props.dispatch({type: 'search/change', payload})

  }
  searchKeyWord = () => {
    const {keyWord} = this.props.search;
    if (keyWord == '') {
      alert('请输入查询关键字！')
      return
    }
    this.props.dispatch({type: 'search/searchKeyWord', payload: keyWord})
  }
  handleEnter = (param) => {
    const {focusIndex, modalVisible} = this.props.search;
    if (modalVisible == true) {
      this.handleOk()
      return
    }
    if (focusIndex >= 0 && focusIndex <= 35) {
      let textAry=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',1,2,3,4,5,6,7,8,9,0]
      this.changeKeyWord(textAry[focusIndex]);
    } else if (focusIndex == 36) {
      this.delKeyWord()
      return
    } else if (focusIndex == 37) {
      this.clearKeyWord();
      return
    } else if (focusIndex == 38) {
      this.searchKeyWord();
      return
    }
  }
  findFocus = () => {
    const {focusIndex} = this.props.search;
    if (focusIndex == -1) {
      return
    }
    const focusImg = btnColumn[focusIndex]
    const width = (focusImg.width + 26) / 100 + 'rem';
    const height = (focusImg.height + 26) / 100 + 'rem';
    const top = (focusImg.top - 13) / 100 + 'rem';
    const left = (focusImg.left - 13) / 100 + 'rem';
    const src = focusImg.bgImg;
    return <img src={src} style={{width, height, position: 'absolute', left, top}}/>
  }

  render() {
    const {keyWord, find} = this.props.search;
    return (<div
      className={styles.searchContainer}
      // style={{backgroundImage: `url(${bg})`}}
      ref='search' onKeyDown={this.handleKeyDown} tabIndex='-1'>
      <img src={bg} className={styles.backImg} alt=""/>
      <p className={styles.searchText}>视频搜索</p>
      <p className={styles.keyword}>{keyWord}</p>
      <img src={search} className={styles.searchIcon}/>
      <img src={line} className={styles.line} alt=""/>
      {
        btnColumn.map((item, index) => {
          const width = `${item.width / 100}rem`;
          const height = `${item.height / 100}rem`;
          const left = `${item.left / 100}rem`;
          const top = `${item.top / 100}rem`;
          const src = item.contentImg;
          return <img src={src} style={{width, height, left, top, position: 'absolute'}} key={index}/>
        })
      }
      {
        find == 'tuiJian' ? <Hot search={this.props.search} dispatch={this.props.dispatch}/> : find == 'notFound' ?
          <NotFound search={this.props.search} dispatch={this.props.dispatch}/> :
          <Result search={this.props.search} dispatch={this.props.dispatch}/>
      }
      {
        this.findFocus()
      }
    </div>)
  }
}

export default connect(({search}) => ({search}))(Search)

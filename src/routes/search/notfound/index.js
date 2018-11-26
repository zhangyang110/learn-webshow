import React from "react";
import styles from './index.less'
import exclamation from '../../../public/Imgs/search/notfound/exclamation.png'
import focusbig from '../../../public/Imgs/search/notfound/focusbig.png'
import config from 'config'
import classnames from "classnames";
import Magnet from "../../../components/citie";
import Loader from "../../../components/Loading";

const column = [
  {left: 496, top: 370, width: 160, height: 240,},
  {left: 677, top: 370, width: 160, height: 240,},
  {left: 858, top: 370, width: 160, height: 240,},
  {left: 1039, top: 370, width: 160, height: 240},
]

class NotFound extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.refs.notFound.focus();
    }, 0)
  }

  // componentWillUnmount() {
  // this.refs.notFound.removeEventListener('keydown', this.handleKeyDown)
  // }
  handleKeyDown = (e) => {
    const {focusIndex} = this.props.search;
    if (focusIndex != -1) {
      return
    }
    switch (e.keyCode) {
      case 37:
        this.moveLeft()
        break;

      case 39:
        this.moveRight()
        break;
      case 13:
        this.handleEnter()
        break;
    }
  }
  sendAction = (param) => {
    const {notFoundFocus} = this.props.search;
    const payload = {notFoundFocus: param}
    this.props.dispatch({type: 'search/change', payload})
  }
  moveLeft = (param) => {
    const {notFoundFocus} = this.props.search
    switch (notFoundFocus) {
      case 0:
        this.props.dispatch({type: 'search/change', payload: {notFoundFocus: -1}})
        this.props.dispatch({type: 'search/change', payload: {focusIndex: 23}})
        break;
      case 1:
        this.props.dispatch({type: 'search/change', payload: {notFoundFocus: 0}})
        break;
      case 2:
        this.props.dispatch({type: 'search/change', payload: {notFoundFocus: 1}})
        break;
      case 3:
        this.props.dispatch({type: 'search/change', payload: {notFoundFocus: 2}})
        break;
    }
  }
  moveRight = (payload) => {
    const {notFoundFocus} = this.props.search
    switch (notFoundFocus) {
      case -1:
        this.sendAction(0);
        break;
      case 0:
        this.sendAction(1);
        break;
      case 1:
        this.sendAction(2);
        break;
      case 2:
        this.sendAction(3);
        break;
    }
  }
  handleEnter = (param) => {
    const {notFoundFocus, recommendData, focusIndex} = this.props.search;
    if (focusIndex != -1) {
      return
    }
    this.props.dispatch({type: 'search/jumpPage', payload: recommendData[notFoundFocus].series_id})

  }
  findFocus = () => {
    const {notFoundFocus} = this.props.search;
    if (notFoundFocus == -1) {
      return
    }
    const focusImg = column[notFoundFocus];
    const width = (focusImg.width + 26) / 100 + 'rem';
    const height = (focusImg.height + 26) / 100 + 'rem';
    const top = (focusImg.top - 13) / 100 + 'rem';
    const left = (focusImg.left - 13) / 100 + 'rem';
    const src = focusbig;
    return <img src={src} style={{width, height, position: 'absolute', left, top}}/>
  }

  render() {
    const {recommendData, notFoundFocus} = this.props.search;
    if (recommendData.length <= 0) {
      return (<Loader/>)
    }
    const Data = [
      {
        left: 496,
        top: 370,
        width: 160,
        height: 240,
        contentImg: recommendData[0].cover_url,
        contentText: recommendData[0].name
      },
      {
        left: 677,
        top: 370,
        width: 160,
        height: 240,
        contentImg: recommendData[1].cover_url,
        contentText: recommendData[1].name
      },
      {
        left: 858,
        top: 370,
        width: 160,
        height: 240,
        contentImg: recommendData[2].cover_url,
        contentText: recommendData[2].name
      },
      {
        left: 1039,
        top: 370,
        width: 160,
        height: 240,
        contentImg: recommendData[3].cover_url,
        contentText: recommendData[3].name
      },
    ]
    return (<div className={styles.notFound} ref='notFound' onKeyDown={this.handleKeyDown} tabIndex='-1'>
      <img src={exclamation} className={styles.exclamation} alt=""/>
      <p className={styles.notfoundText}>搜索不到相关影片</p>
      <p className={styles.please}>请重新搜索您想要找的影片</p>
      <p className={styles.hotRecommendText}>热门推荐:</p>
      {
        Data.map((item, index) => {
          const left = item.left / 100 + 'rem';
          const top = item.top / 100 + 'rem';
          const src = item.contentImg;
          let addAnimate = notFoundFocus == index && item.contentText.length >= 10;
          let opts={
            src,
            left,
            top,
            addAnimate,
            text:item.contentText
          }
          return <Magnet {...opts} key={index}/>
        })
      }

      {
        this.findFocus()
      }
    </div>)
  }
}

export default NotFound

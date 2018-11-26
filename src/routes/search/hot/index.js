import React from "react";
import styles from './index.less'
import focusbig from '../../../public/Imgs/search/hot/focusbig.png'
import config from 'config'
import classnames from "classnames";
import Magnet from "../../../components/citie";
import Loader from "../../../components/Loading";

const column = [
  {left: 496, top: 85, width: 160, height: 240},
  {left: 677, top: 85, width: 160, height: 240},
  {left: 858, top: 85, width: 160, height: 240},
  {left: 1039, top: 85, width: 160, height: 240},

  {left: 496, top: 371, width: 160, height: 240},
  {left: 677, top: 371, width: 160, height: 240},
  {left: 858, top: 371, width: 160, height: 240},
  {left: 1039, top: 371, width: 160, height: 240},
];

class Hot extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.refs.hot.focus();
    }, 0)
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
    if (param == -1) {
      const {hotRecommend} = this.props.search;
      let focus;
      switch (hotRecommend) {
        case 0:
          focus = 5;
          break;
        case 4:
          focus = 29;
          break;
      }
      const payload = {focusIndex: focus, hotRecommend: -1,}
      this.props.dispatch({type: 'search/change', payload})
      return
    } else {
      const payload = {hotRecommend: param}
      this.props.dispatch({type: 'search/change', payload})
      return
    }

  }
  moveLeft = (param) => {
    const {hotRecommend} = this.props.search
    switch (hotRecommend) {
      case 0:
        this.sendAction(-1);
        break;
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
        this.sendAction(-1);
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

    }
  }
  moveUp = (param) => {
    const {hotRecommend} = this.props.search
    switch (hotRecommend) {
      case 4:
        this.sendAction(0);
        break;
      case 5:
        this.sendAction(1);
        break;
      case 6:
        this.sendAction(2);
        break;
      case 7:
        this.sendAction(3);
        break;
      case 8:
        this.sendAction(4);
        break;
    }
  }
  moveDown = (param) => {
    const {hotRecommend} = this.props.search
    switch (hotRecommend) {

      case 0:
        this.sendAction(4);
        break;
      case 1:
        this.sendAction(5);
        break;
      case 2:
        this.sendAction(6);
        break;
      case 3:
        this.sendAction(7);
        break;
    }
  }
  moveRight = (payload) => {
    const {hotRecommend} = this.props.search;
    switch (hotRecommend) {
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
    }
  }
  handleEnter = (param) => {

    const {hotRecommend, recommendData, focusIndex} = this.props.search;
    if (focusIndex != -1) {
      return
    }
    this.props.dispatch({type: 'search/jumpPage', payload: recommendData[hotRecommend].series_id})
  }
  findFocus = () => {
    const {hotRecommend} = this.props.search;
    if (hotRecommend == -1) {
      return
    }
    const focusImg = column[hotRecommend]
    const width = (focusImg.width + 26) / 100 + 'rem';
    const height = (focusImg.height + 26) / 100 + 'rem';
    const top = (focusImg.top - 13) / 100 + 'rem';
    const left = (focusImg.left - 13) / 100 + 'rem';
    const src = focusbig;
    return <img src={src} style={{width, height, left, top, position: 'absolute'}}/>
  }

  render() {
    const {recommendData, hotRecommend} = this.props.search;
    if (recommendData.length <= 0) {
      return (<Loader/>)
    }
    const columnData = [
      {
        left: 496,
        top: 85,
        width: 160,
        height: 240,
        contentImg: recommendData[0].cover_url,
        contentText: recommendData[0].name
      },
      {
        left: 677,
        top: 85,
        width: 160,
        height: 240,
        contentImg: recommendData[1].cover_url,
        contentText: recommendData[1].name
      },
      {
        left: 858,
        top: 85,
        width: 160,
        height: 240,
        contentImg: recommendData[2].cover_url,
        contentText: recommendData[2].name
      },
      {
        left: 1039,
        top: 85,
        width: 160,
        height: 240,
        contentImg: recommendData[3].cover_url,
        contentText: recommendData[3].name
      },

      {
        left: 496,
        top: 371,
        width: 160,
        height: 240,
        contentImg: recommendData[4].cover_url,
        contentText: recommendData[4].name
      },
      {
        left: 677,
        top: 371,
        width: 160,
        height: 240,
        contentImg: recommendData[5].cover_url,
        contentText: recommendData[5].name
      },
      {
        left: 858,
        top: 371,
        width: 160,
        height: 240,
        contentImg: recommendData[6].cover_url,
        contentText: recommendData[6].name
      },
      {
        left: 1039,
        top: 371,
        width: 160,
        height: 240,
        contentImg: recommendData[7].cover_url,
        contentText: recommendData[7].name
      },
    ];

    return (<div className={styles.hotPage} ref='hot' onKeyDown={this.handleKeyDown} tabIndex='-1'>
      <p className={styles.hotText}>热门推荐:</p>
      {
        columnData.map((item, index) => {
          const left = item.left / 100 + 'rem';
          const top = item.top / 100 + 'rem';
          const src = item.contentImg;
          let addAnimate = hotRecommend == index && item.contentText.length >= 10;

          let opts={
            src:item.contentImg,
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

export default Hot

import React from "react";
import styles from "./index.less"
import {connect} from "dva/index";
import Recommend from "./recommend";
import CartoonHouse from "./cartoonHouse";
import Classification from "./classification";
import LeaderBoard from "./leaderboard";
import Time from "../../components/time";
import HeadUnit from "./head/headUnit";
import headerFocus from '../../public/Imgs/dashboard/childrenComponent/headerfocus.png'
import searchFocus from '../../public/Imgs/dashboard/childrenComponent/searchbg.png'
import searchImg from '../../public/Imgs/dashboard/childrenComponent/search.png'
import Head from "./head";
import {routerRedux} from "dva/router";

const headerColumn = [
  // {lef: '68', top: '75', width: '', height: ''},
  {left: 68, top: 75, width: 152, height: 64, text: '推荐', focusImg: headerFocus},
  {left: 223, top: 75, width: 152, height: 64, text: '动画屋', focusImg: headerFocus},
  {left: 372, top: 75, width: 152, height: 64, text: '分类', focusImg: headerFocus},
  {left: 520, top: 75, width: 152, height: 64, text: '排行榜', focusImg: headerFocus},
  // {left: 1134, top: 75, width: 96, height: 64},
  {left: 1099, top: 74, width: 96, height: 64, text: '', focusImg: searchFocus, searchImg: searchImg},
]

class CartoonHome extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    let myDate = new Date();
    let hour = myDate.getHours();
    let minute = myDate.getMinutes();
    if (`${minute}`.length <= 1) {
      minute = `0${minute}`
    }
    this.props.dispatch({type: 'cartoonHome/change', payload: {time: `${hour} : ${minute}`}})
    this.getTime();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  componentWillReceiveProps(nextProps) {
    let nextInd = nextProps.cartoonHome.headIndex;
    let thisInd = this.props.cartoonHome.headIndex;
    if (nextInd != thisInd && nextInd != 4 && thisInd != 4) {
      let pageNames = ['首页推荐', '首页动画屋', '首页分类', '首页排行榜'];
      let page_name = pageNames[nextInd];
      let opts = {
        eventId: 'enter_page',
        extraParameter: {
          page_name,
        }
      }
      this.props.dispatch({type: 'cartoonHome/addEvent', payload: opts})
    }
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
  getTime = () => {
    clearInterval('time');
    let time = setInterval(() => {
      let myDate = new Date();
      let hour = myDate.getHours();
      let minute = myDate.getMinutes();
      if (`${minute}`.length <= 1) {
        minute = `0${minute}`
      }
      this.props.dispatch({type: 'cartoonHome/change', payload: {time: `${hour} : ${minute}`}})
    }, 30000)
  }
  moveDown = () => {
    let {headBlur, headIndex} = this.props.cartoonHome;
    if (!headBlur) {
      this.sendAction({headBlur: true, botIndex: 0,})
    } else {
      let moveDownAry = [
        this.recommendDown,
        this.cartoonDown,
        this.classDown,
        this.rankDown,
      ];

      let moveIndex = headIndex >= 4 ? 3 : headIndex;
      moveDownAry[moveIndex]();
    }
  }
  moveUp = () => {
    let {headBlur, headIndex} = this.props.cartoonHome;
    let moveUpAry = [
      this.recommendUp.bind(this, [0, 1, 2]),
      this.cartoonUp.bind(this, [0, 1, 2, 3]),
      this.classUp.bind(this, [0, 1, 2, 3]),
      this.ranksUp.bind(this, [0, 5, 10]),

    ]
    let moveIndex = headIndex >= 4 ? 3 : headIndex;
    moveUpAry[moveIndex]();
  }
  moveLeft = () => {
    let {headBlur, headIndex} = this.props.cartoonHome;
    if (!headBlur) {
      //head left
      headIndex >= 1 && this.sendAction({headIndex: headIndex - 1})
    } else {
      let moveLeftAry = [
        this.recommendLeft.bind(this, [3]),
        this.cartoonLeft,
        this.classLeft,
        this.rankLeft,
      ];
      let moveIndex = headIndex >= 4 ? 3 : headIndex;
      moveLeftAry[moveIndex]();
    }
  }
  moveRight = () => {
    let {headBlur, headIndex} = this.props.cartoonHome;
    if (!headBlur) {
      //top
      headIndex < 4 && this.sendAction({headIndex: headIndex + 1})
    } else {
      let moveRightAry = [
        this.recommendRight.bind(this, [2, 3, 7]),
        this.cartoonRight,
        this.classRight,
        this.rankRight,
      ];
      let moveIndex = headIndex >= 4 ? 3 : headIndex;
      moveRightAry[moveIndex]();
    }
  }
  handleEnter = () => {
    let {headBlur, headIndex} = this.props.cartoonHome;
    if (!headBlur && headIndex === 4) {
      this.props.dispatch({type: 'cartoonHome/jumpPage', payload: {to: '/search', query: ''}})
      let opts = {
        eventId: 'click_search_entrance',
        extraParameter: ''
      }
      this.props.dispatch({type: 'cartoonHome/addEvent', payload: opts})
    } else if (headBlur) {
      let enterAry = [
        this.recommendEnt,
        this.cartoonEnt,
        this.kindsEnt,
        this.leaderEnt,
      ]
      let moveIndex = headIndex >= 4 ? 3 : headIndex;
      enterAry[moveIndex]();
    }
  }
  //+++++++++++++++++++++++++++++++++++++++++++++++
  leaderEnt = () => {
    let {botIndex, totalList, monthlyList, weekList} = this.props.cartoonHome;
    let query;
    if (botIndex >= 0 && botIndex <= 4) {
      query = totalList[botIndex].series_id;
    } else if (botIndex >= 5 && botIndex <= 9) {
      query = weekList[botIndex - 5].series_id
    } else if (botIndex >= 10 && botIndex <= 14) {
      query = monthlyList[botIndex - 10].series_id
    }
    this.props.dispatch({type: 'cartoonHome/jumpPage', payload: {to: '/detail', query}})

  }
  kindsEnt = () => {
    let {botIndex} = this.props.cartoonHome;
    let idAry = [3, 4, 8, 9, 10, 11, 12, 13];
    this.props.dispatch({type: 'cartoonHome/jumpPage', payload: {to: '/kinds', query: `1/${idAry[botIndex]}`}})
  }
  cartoonEnt = () => {
    let {cartoonData, botIndex} = this.props.cartoonHome;
    // this.props.dispatch({type: 'dashboard/carToonJumpPage', payload: cartoonHouseData[param]})
    this.commendJump(cartoonData[botIndex])
  }
  recommendEnt = () => {
    let {botIndex, recommendData} = this.props.cartoonHome;
    if (botIndex === 0 || botIndex === 1) {
      this.commendJump(recommendData[botIndex]);
      //添加运营位统计
      let curData = recommendData[botIndex]
      let opts = {
        eventId: 'click_operation',
        extraParameter: {
          position: curData.position,
          name: curData.name
        }
      }

      this.props.dispatch({type: 'cartoonHome/addEvent', payload: opts})
    } else if ([4, 5, 6, 7].includes(botIndex)) {
      this.commendJump(recommendData[botIndex - 2])
      //添加运营位统计
      let curData = recommendData[botIndex - 2]
      console.log(curData.position);
      let opts = {
        eventId: 'click_operation',
        extraParameter: {
          position: curData.position,
          name: curData.name
        }
      }

      this.props.dispatch({type: 'cartoonHome/addEvent', payload: opts})

    } else if ([2, 3].includes(botIndex)) {


      let toAry = ['/playHistory', '/collects'];
      let to = toAry[botIndex - 2];
      let eventIds = ['click_history_entrance', 'click_collect_entrance'];
      let eventId = eventIds[botIndex - 2];
      let opts = {
        eventId,
        extraParameter: ''
      }
      this.props.dispatch({type: 'cartoonHome/addEvent', payload: opts})
      this.props.dispatch({type: 'cartoonHome/jumpPage', payload: {to, query: ''}})
    }
  }
  commendJump = (payload) => {
    switch (payload.type) {
      case 1:
        this.props.dispatch({type: 'cartoonHome/jumpPage', payload: {to: '/detail', query: payload.object_id}})

        // yield put(routerRedux.push(`/${payload.object_id}`));
        break;
      case 2:
        this.props.dispatch({type: 'cartoonHome/jumpPage', payload: {to: '/kinds', query: `1/${payload.object_id}`}})

        // yield put(routerRedux.push(`/kinds/1/${payload.object_id}`));
        break;
      case 3:
        this.props.dispatch({type: 'cartoonHome/jumpPage', payload: {to: '/specialOne', query: `${payload.object_id}`}})

        // yield put(routerRedux.push(`/specialOne/${payload.object_id}`));
        break;
      case 4:
        this.props.dispatch({type: 'cartoonHome/jumpPage', payload: {to: '/specialTwo', query: `${payload.object_id}`}})

        // yield put(routerRedux.push(`/specialTwo/${payload.object_id}`));
        break;
      case 5:
        this.props.dispatch({type: 'cartoonHome/jumpPage', payload: {to: '/specialOne', query: `${payload.object_id}`}})
        // yield put(routerRedux.push(`/specialOne/${payload.object_id}`));
        break;
      case 6:
        this.props.dispatch({
          type: 'cartoonHome/jumpPage',
          payload: {to: '/limitedFree', query: `${payload.object_id}`}
        })
        // yield put(routerRedux.push(`/limitedFree/${payload.object_id}`));
        break;
    }
  }
  recommendRight = (param) => {
    let {botIndex} = this.props.cartoonHome;
    if (!param.includes(botIndex)) {
      botIndex < 7 && this.sendAction({botIndex: botIndex + 1});
    }
  }
  recommendDown = (param) => {
    let {botIndex} = this.props.cartoonHome;
    botIndex == 0 ? this.sendAction({botIndex: 4}) : '';
    botIndex == 1 ? this.sendAction({botIndex: 5}) : '';
    botIndex == 2 ? this.sendAction({botIndex: 3}) : '';
    botIndex == 3 ? this.sendAction({botIndex: 7}) : '';
  }
  recommendUp = (param) => {
    let {botIndex} = this.props.cartoonHome;
    if (param.includes(botIndex)) {
      this.goHead()
    } else {
      botIndex == 3 ? this.sendAction({botIndex: 2}) : '';
      botIndex == 4 || botIndex == 5 ? this.sendAction({botIndex: 0}) : '';
      botIndex == 6 ? this.sendAction({botIndex: 1}) : '';
      botIndex == 7 ? this.sendAction({botIndex: 3}) : '';
    }
  }
  cartoonRight = () => {
    let {botIndex} = this.props.cartoonHome;
    botIndex < 8 && this.sendAction({botIndex: botIndex + 1})
  }
  cartoonLeft = () => {
    let {botIndex} = this.props.cartoonHome;
    botIndex >= 1 && this.sendAction({botIndex: botIndex - 1})
  }
  recommendLeft = (param) => {
    let {botIndex} = this.props.cartoonHome;
    if (!param.includes(botIndex)) {
      botIndex >= 1 && this.sendAction({botIndex: botIndex - 1})
    } else {
      this.sendAction({botIndex: 1})
    }
  }
  cartoonDown = () => {
    let {botIndex} = this.props.cartoonHome;
    if (botIndex >= 0 && botIndex <= 3)
      this.sendAction({botIndex: botIndex + 5})
  }
  cartoonUp = (param) => {
    let {botIndex} = this.props.cartoonHome;
    if (param.includes(botIndex)) {
      this.goHead()
    } else {
      this.sendAction({botIndex: botIndex - 5})
    }

  }
  classDown = () => {
    let {botIndex} = this.props.cartoonHome;
    let flag = botIndex >= 0 && botIndex <= 3;
    flag && this.sendAction({botIndex: botIndex + 4})
  }
  classUp = (param) => {
    let {botIndex} = this.props.cartoonHome;
    if (param.includes(botIndex)) {
      this.goHead()
    } else {
      this.sendAction({botIndex: botIndex - 4})
    }

  }
  classLeft = () => {
    let {botIndex} = this.props.cartoonHome;
    botIndex >= 1 && this.sendAction({botIndex: botIndex - 1})
  }
  classRight = () => {
    let {botIndex} = this.props.cartoonHome;
    botIndex < 7 && this.sendAction({botIndex: botIndex + 1})
  }
  rankDown = () => {
    let {botIndex} = this.props.cartoonHome;
    botIndex < 14 && this.sendAction({botIndex: botIndex + 1})
  }
  ranksUp = (param) => {
    let {botIndex} = this.props.cartoonHome;
    if (param.includes(botIndex)) {
      this.goHead()
    } else {
      botIndex >= 1 && this.sendAction({botIndex: botIndex - 1})
    }

  }
  rankLeft = () => {
    let {botIndex} = this.props.cartoonHome;
    if (botIndex >= 5 && botIndex <= 14) {
      this.sendAction({botIndex: botIndex - 5})
    }
  }
  rankRight = () => {
    let {botIndex} = this.props.cartoonHome;
    if (botIndex >= 0 && botIndex <= 9) {
      this.sendAction({botIndex: botIndex + 5})
    }
  }
  sendAction = (param) => {
    this.props.dispatch({type: 'cartoonHome/change', payload: param});
  }
  goHead = () => {
    this.sendAction({headBlur: false, botIndex: -1});
  }

  render() {
    let {time, headIndex, headBlur, animateEl, botIndex, recommendData, cartoonData, weekList, monthlyList, totalList} = this.props.cartoonHome
    let timeOpts = {
      time,
      timePosition: {
        left: '11.54rem',
        top: '.36rem',
      }
    }
    let HeadProps = {
      headerColumn,
      headIndex,
      headBlur
    }
    let RecommendOpts = {
      headIndex,
      botIndex,
      recommendData,
      visible: headIndex === 0 ? true : false
    }

    let cartoonProps = {
      headIndex,

      botIndex,
      cartoonData,
      visible: headIndex === 1 ? true : false
    }
    let classificationProps = {
      headIndex,
      botIndex,
      visible: headIndex === 2 ? true : false
    }
    let leaderboardProps = {
      headIndex,
      botIndex,
      totalList,
      monthlyList,
      weekList,
      addAnimate: (param) => {
        this.sendAction({animateEl: param})
      },
      animateEl,
      visible: headIndex === 3 || headIndex === 4 ? true : false
    }

    return (<div className={styles.main}>
      <Time {...timeOpts}/>
      <Head {...HeadProps}/>
      <Recommend {...RecommendOpts}/>
      <CartoonHouse {...cartoonProps}/>
      <Classification {...classificationProps}/>
      <LeaderBoard {...leaderboardProps}/>

    </div>)
  }
}

export default connect((cartoonHome) => (cartoonHome))(CartoonHome)

import React from 'react'
import { connect } from 'dva/index'
import styles from './index.less'
import HomeTop from './top'
import HomeHead from './head'
import homebg from '../../public/eduImgs/eduHome/homebg.png'
import HomeMain from './main'
import Time from '../../components/time'

class EduHome extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
    let myDate = new Date()
    let hour = myDate.getHours()
    let minute = myDate.getMinutes()
    if (`${minute}`.length <= 1) {
      minute = `0${minute}`
    }
    this.props.dispatch({ type: 'eduHome/change', payload: { time: `${hour} : ${minute}` } })
    this.getTime()
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  getTime = () => {
    clearInterval('time')
    let time = setInterval(() => {
      let myDate = new Date()
      let hour = myDate.getHours()
      let minute = myDate.getMinutes()
      if (`${minute}`.length <= 1) {
        minute = `0${minute}`
      }
      this.props.dispatch({ type: 'eduHome/change', payload: { time: `${hour} : ${minute}` } })
    }, 30000)
  }
  handleKeyDown = (e) => {
    let { botIndex, dataAry, headBlur, headIndex, topIndex } = this.props.eduHome
    let focusAt
    if (topIndex > -1) {
      // zai top
      focusAt = 0
    } else if (!headBlur) {
      //zai head
      focusAt = 1
    } else {
      //zai bot
      focusAt = 2
    }
    switch (e.keyCode) {
      case 37:
        this.moveLeft(focusAt)
        break
      case 38:
        this.moveUp(focusAt)
        break
      case 39:
        this.moveRight(focusAt)
        break
      case 40:
        this.moveDown(focusAt)
        break
      case 13:
        this.handleEnter(focusAt)
        break
    }

    if(window.globalOpts.channel==='chongqing'){

    }else {
      e.preventDefault && e.preventDefault()
      e.returnValue = false
      e.stopPropagation && e.stopPropagation()
      return false
    }
  }
  moveLeft = (param) => {
    let { headIndex } = this.props.eduHome
    if (param <= 1) {
      let leftAry = [this.topMoveLeft, this.headMoveLeft]
      leftAry[param]()
    } else {
      // bot de moveleft 根据 headIndex  判断
      let moveLeftAry = [this.mainMoveLeft, this.InfantLeft, this.primaryLeft, this.mainMoveLeft, this.highLeft, this.interestLeft]
      moveLeftAry[headIndex]()
    }
  }
  moveRight = (param) => {
    let { headIndex } = this.props.eduHome
    if (param <= 1) {
      let rightAry = [this.topMoveRight, this.headMoveRight]
      rightAry[param]()
    } else {
      // bot de moveright  根据 headIndex  判断
      let moveRightAry = [
        this.commentRight.bind(this, [8]),
        this.commentRight.bind(this, [2, 3, 4, 5, 9]),
        this.commentRight.bind(this, [2, 3, 10]),
        this.commentRight.bind(this, [7]),
        this.commentRight.bind(this, [2, 3, 4, 8]),
        this.commentRight.bind(this, [2, 3, 7]),
      ]
      moveRightAry[headIndex]()
    }
  }
  moveUp = (param) => {
    let { headIndex } = this.props.eduHome
    param == 1 && this.sendAction({ headBlur: true, topIndex: 0 })
    if (param == 2) {
      let moveUpAry = [
        this.FeaturedUp.bind(this, [0, 1, 2]),
        this.InfantUp.bind(this, [0, 1, 2]),
        this.primaryUp.bind(this, [0, 1, 2]),
        this.midUp.bind(this, [0, 1, 2, 3]),
        this.highUp.bind(this, [0, 1, 2]),
        this.interestUp.bind(this, [0, 1, 2]),
      ]
      moveUpAry[headIndex]()
    }
  }
  moveDown = (param) => {
    let { headIndex } = this.props.eduHome
    param == 0 && this.sendAction({ headBlur: false, topIndex: -1 })
    param == 1 && this.sendAction({ headBlur: true, botIndex: 0 })
    if (param == 2) {
      let moveDownAry = [
        this.FeaturedDown,
        this.InfantDown,
        this.primaryDown,
        this.midDown,
        this.highDown,
        this.interestDown,
      ]
      moveDownAry[headIndex]()
    }
  }
  handleEnter = (param) => {
    let { topIndex, headIndex, botIndex, dataAry } = this.props.eduHome
    if (param == 0) {
      let ary = ['/search', '/playHistory', '/collects']
      let eventIds = ['click_search_entrance', 'click_history_entrance', 'click_collect_entrance']
      this.props.dispatch({ type: 'eduHome/jumpPage', payload: ary[topIndex] })
      this.props.dispatch({ type: 'eduHome/click_top', payload: eventIds[topIndex] })
    } else if (param == 2) {
      // 婴幼 小学  初中  高中  兴趣
      let parentIds = ['', 14, 21, 28, 32, 36]
      let parent_id = parentIds[headIndex]
      let curData = dataAry[headIndex][botIndex]
      this.props.dispatch({ type: 'eduHome/otherPage', payload: { curData, parent_id } })
      this.props.dispatch({ type: 'eduHome/click_education', payload: curData })
    }
  }
  sendAction = (param) => {
    this.props.dispatch({ type: 'eduHome/change', payload: param })
    if ('headIndex' in param) {
      let headAry = ['教育精选频道', '教育婴幼频道', '教育小学频道', '教育初中频道', '教育高中频道', '教育兴趣频道']
      this.props.dispatch({ type: 'eduHome/addTimes', payload: { page_name: headAry[param.headIndex] } })
    }
  }
  ///====++++++++++++++++++++++++++++++++++++++
  topMoveLeft = () => {
    let { topIndex } = this.props.eduHome
    if (topIndex >= 1) {
      this.sendAction({ topIndex: topIndex - 1 })
    }
  }
  headMoveLeft = () => {
    let { headIndex } = this.props.eduHome
    if (headIndex >= 1) {
      this.sendAction({ headIndex: headIndex - 1 })

    }

  }
  mainMoveLeft = () => {
    let { botIndex } = this.props.eduHome
    if (botIndex >= 1) {
      this.sendAction({ botIndex: botIndex - 1 })
    }
  }
  InfantLeft = () => {
    let { botIndex } = this.props.eduHome
    let ary = [2, 3, 4, 5]
    if (ary.includes(botIndex)) {
      this.sendAction({ botIndex: 1 })
    } else {
      botIndex >= 1 && this.sendAction({ botIndex: botIndex - 1 })
    }
  }
  primaryLeft = () => {
    let { botIndex } = this.props.eduHome
    let ary = [2, 3]
    if (ary.includes(botIndex)) {
      this.sendAction({ botIndex: 1 })
    } else {
      botIndex >= 1 && this.sendAction({ botIndex: botIndex - 1 })
    }
  }
  highLeft = () => {
    let { botIndex } = this.props.eduHome
    let ary = [2, 3, 4]
    if (ary.includes(botIndex)) {
      this.sendAction({ botIndex: 1 })
    } else {
      botIndex >= 1 && this.sendAction({ botIndex: botIndex - 1 })
    }
  }
  interestLeft = () => {
    let { botIndex } = this.props.eduHome
    let ary = [2, 3]
    if (ary.includes(botIndex)) {
      this.sendAction({ botIndex: 1 })
    } else {
      botIndex >= 1 && this.sendAction({ botIndex: botIndex - 1 })
    }
  }
  //++++++++++++++++++++++++++++++++
  topMoveRight = () => {
    let { topIndex } = this.props.eduHome
    topIndex < 2 && this.sendAction({ topIndex: topIndex + 1 })
  }
  headMoveRight = () => {
    let { headIndex } = this.props.eduHome
    headIndex < 5 && this.sendAction({ headIndex: headIndex + 1 })
  }
  mainMoveRight = (param) => {
    let { botIndex } = this.props.eduHome
    botIndex < param && this.sendAction({ botIndex: botIndex + 1 })
  }
  commentRight = (param) => {
    let { botIndex } = this.props.eduHome
    !param.includes(botIndex) && this.sendAction({ botIndex: botIndex + 1 })
  }
///moveup   ++++++++++++++++++++++++++++++++++++
  goHead = (param) => {
    let { botIndex } = this.props.eduHome
    let flag = param.includes(botIndex)
    flag && this.sendAction({ headBlur: false, botIndex: -1 })
  }
  FeaturedUp = (param) => {
    let { botIndex } = this.props.eduHome
    this.goHead(param)
    if (!param.includes(botIndex)) {
      botIndex == 3 || botIndex == 4 ? this.sendAction({ botIndex: 0 }) : ''
      botIndex == 5 || botIndex == 6 ? this.sendAction({ botIndex: 1 }) : ''
      botIndex == 7 || botIndex == 8 ? this.sendAction({ botIndex: 2 }) : ''
    }
  }
  InfantUp = (param) => {
    let { botIndex } = this.props.eduHome
    this.goHead(param)
    if (!param.includes(botIndex)) {
      botIndex == 3 || botIndex == 4 || botIndex == 5 ? this.sendAction({ botIndex: botIndex - 1 }) : ''
      botIndex == 6 || botIndex == 7 ? this.sendAction({ botIndex: 0 }) : ''
      botIndex == 8 ? this.sendAction({ botIndex: 1 }) : ''
      botIndex == 9 ? this.sendAction({ botIndex: 5 }) : ''
    }
  }
  primaryUp = (param) => {
    this.goHead(param)
    let { botIndex } = this.props.eduHome
    if (!param.includes(botIndex)) {
      botIndex == 3 ? this.sendAction({ botIndex: 2 }) : ''
      botIndex == 10 ? this.sendAction({ botIndex: 3 }) : ''
      botIndex == 4 || botIndex == 5 || botIndex == 6 ? this.sendAction({ botIndex: 0 }) : ''
      botIndex == 7 || botIndex == 8 || botIndex == 9 ? this.sendAction({ botIndex: 1 }) : ''
    }
  }
  midUp = (param) => {
    this.goHead(param)
    let { botIndex } = this.props.eduHome
    if (!param.includes(botIndex)) {
      botIndex == 4 || botIndex == 5 ? this.sendAction({ botIndex: 0 }) : ''
      botIndex == 6 ? this.sendAction({ botIndex: 1 }) : ''
      botIndex == 7 ? this.sendAction({ botIndex: 2 }) : ''
    }
  }
  highUp = (param) => {
    this.goHead(param)
    let { botIndex } = this.props.eduHome
    if (!param.includes(botIndex)) {
      botIndex == 3 || botIndex == 4 ? this.sendAction({ botIndex: botIndex - 1 }) : ''
      botIndex == 5 || botIndex == 6 ? this.sendAction({ botIndex: 0 }) : ''
      botIndex == 7 ? this.sendAction({ botIndex: 1 }) : ''
      botIndex == 8 ? this.sendAction({ botIndex: 4 }) : ''
    }
  }
  interestUp = (param) => {
    this.goHead(param)
    let { botIndex } = this.props.eduHome
    if (!param.includes(botIndex)) {
      botIndex == 3 ? this.sendAction({ botIndex: 2 }) : ''
      botIndex == 4 || botIndex == 5 ? this.sendAction({ botIndex: 0 }) : ''
      botIndex == 6 ? this.sendAction({ botIndex: 1 }) : ''
      botIndex == 7 ? this.sendAction({ botIndex: 3 }) : ''
    }
  }
//  down    +++++++++++++++++++++++++++++++++++
  FeaturedDown = () => {
    let { botIndex } = this.props.eduHome
    botIndex == 0 ? this.sendAction({ botIndex: 3 }) : ''
    botIndex == 1 ? this.sendAction({ botIndex: 5 }) : ''
    botIndex == 2 ? this.sendAction({ botIndex: 7 }) : ''
  }
  InfantDown = () => {
    let { botIndex } = this.props.eduHome
    botIndex == 0 ? this.sendAction({ botIndex: 6 }) : ''
    botIndex == 1 ? this.sendAction({ botIndex: 7 }) : ''
    botIndex == 2 || botIndex == 3 || botIndex == 4 ? this.sendAction({ botIndex: botIndex + 1 }) : ''
    botIndex == 5 ? this.sendAction({ botIndex: 9 }) : ''
  }
  primaryDown = () => {
    let { botIndex } = this.props.eduHome
    botIndex == 0 ? this.sendAction({ botIndex: 4 }) : ''
    botIndex == 1 ? this.sendAction({ botIndex: 7 }) : ''
    botIndex == 2 ? this.sendAction({ botIndex: 3 }) : ''
    botIndex == 3 ? this.sendAction({ botIndex: 10 }) : ''
  }
  midDown = () => {
    let { botIndex } = this.props.eduHome
    botIndex == 0 ? this.sendAction({ botIndex: 4 }) : ''
    botIndex == 1 ? this.sendAction({ botIndex: 6 }) : ''
    botIndex == 2 ? this.sendAction({ botIndex: 6 }) : ''
    botIndex == 3 ? this.sendAction({ botIndex: 7 }) : ''
  }
  highDown = () => {
    let { botIndex } = this.props.eduHome
    botIndex == 0 ? this.sendAction({ botIndex: 5 }) : ''
    botIndex == 1 ? this.sendAction({ botIndex: 6 }) : ''
    botIndex == 2 || botIndex == 3 ? this.sendAction({ botIndex: botIndex + 1 }) : ''
    botIndex == 4 ? this.sendAction({ botIndex: 8 }) : ''
  }
  interestDown = () => {
    let { botIndex } = this.props.eduHome
    botIndex == 0 ? this.sendAction({ botIndex: 4 }) : ''
    botIndex == 1 ? this.sendAction({ botIndex: 5 }) : ''
    botIndex == 2 ? this.sendAction({ botIndex: 3 }) : ''
    botIndex == 3 ? this.sendAction({ botIndex: 7 }) : ''

  }

  render() {
    let { dataAry, topIndex, headIndex, headBlur, botIndex } = this.props.eduHome
    let topOpts = { topIndex }
    let headOpts = { headIndex, headBlur }
    let mainOpts = { botIndex, dataAry, headIndex, headBlur }

    let timeOpts = {
      time: this.props.eduHome.time,
      timePosition: {
        left: '11.99rem',
        top: '.17rem',
      },
    }
    return (<div className={styles.eduHome} style={{ backgroundImage: `url(${homebg})` }}>
      <Time {...timeOpts}/>
      <HomeTop {...topOpts}/>
      <HomeHead {...headOpts}/>
      <HomeMain {...mainOpts}/>
    </div>)
  }
}

export default connect((eduHome) => (eduHome))(EduHome)


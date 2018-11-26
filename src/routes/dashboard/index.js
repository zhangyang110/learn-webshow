import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'
import tuijian from '../../public/Imgs/dashboard/index/dashboardBackgroundImg.png'
import fenleibg from '../../public/Imgs/dashboard/index/fenleibg.png'
import defaultBg from '../../public/Imgs/dashboard/index/default.png'
import paihangbg from '../../public/Imgs/dashboard/index/paihangbg.png'
import classnames from 'classnames'
import ChildrenComponent from './childrenComponent'
import CartoonHouse from './cartoonHouse'
import Recommend from './recommend'
import Classification from './classification'
import Leaderboard from './leaderboard'
import carToonBg from '../../public/Imgs/dashboard/index/donghuawubg.png'
import Error from '../error'
import Time from '../../components/time'

const headerColumn = [
  // {lef: '68', top: '75', width: '', height: ''},
  { left: 68, top: 75, width: 152, height: 64 },
  { left: 223, top: 75, width: 152, height: 64 },
  { left: 372, top: 75, width: 152, height: 64 },
  { left: 520, top: 75, width: 152, height: 64 },
  // {left: 1134, top: 75, width: 96, height: 64},
  { left: 1099, top: 74, width: 96, height: 64 },
]

class Dashboard extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)

    let myDate = new Date()
    let hour = myDate.getHours()
    let minute = myDate.getMinutes()
    if (`${minute}`.length <= 1) {
      minute = `0${minute}`
    }
    this.props.dispatch({ type: 'dashboard/change', payload: { time: `${hour} : ${minute}` } })
    this.getTime()
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
    clearInterval('time')
  }

  sendAction = (payload) => {
    // this.props.dispatch({type: 'dashboard/changeCurrentHeader', payload});
    this.props.dispatch({ type: 'dashboard/addTimes', payload })
  }
  jumpPage = (payload) => {
    const { currentHeader, cartoonFocusIndex, recommendFocusIndex, ClassifyFocusIndex, LeaderBoardFocusIndex } = this.props.dashboard
    const flag = recommendFocusIndex == -1 && cartoonFocusIndex == -1 && ClassifyFocusIndex == -1 && LeaderBoardFocusIndex == -1 && currentHeader == 'search'
    if (!flag) {
      return
    }
    this.props.dispatch({ type: 'dashboard/jumpPage', payload })
  }
  moveLeft = () => {
    const { currentHeader, cartoonFocusIndex, recommendFocusIndex, ClassifyFocusIndex, LeaderBoardFocusIndex } = this.props.dashboard
    switch (currentHeader) {
      case 'cartoonhouse':
        this.sendAction('recommend')
        break
      case 'classification':
        this.sendAction('cartoonhouse')
        break
      case 'leaderboard':
        this.sendAction('classification')
        break
      case 'leaderboard':
        this.sendAction('search')
        break
      case 'search':
        this.sendAction('leaderboard')
        break
    }
  }
  moveRight = () => {
    const { currentHeader, recommendFocusIndex, cartoonFocusIndex, ClassifyFocusIndex, LeaderBoardFocusIndex } = this.props.dashboard
    const flag = recommendFocusIndex == -1 && cartoonFocusIndex == -1 && ClassifyFocusIndex == -1 && LeaderBoardFocusIndex == -1
    if (!flag) {
      return
    }
    switch (currentHeader) {
      case 'recommend':
        this.sendAction('cartoonhouse')
        break
      case 'cartoonhouse':
        this.sendAction('classification')
        break
      case 'classification':
        this.sendAction('leaderboard')
        break
      case 'leaderboard':
        this.sendAction('search')
        break
    }

  }
  handleKeyDown = (e) => {
    const { currentHeader, cartoonFocusIndex, recommendFocusIndex, ClassifyFocusIndex, LeaderBoardFocusIndex } = this.props.dashboard
    const flag = recommendFocusIndex == -1 && cartoonFocusIndex == -1 && ClassifyFocusIndex == -1 && LeaderBoardFocusIndex == -1
    if (!flag) {
      return
    }
    switch (e.keyCode) {
      case 37:
        this.moveLeft()
        break
      case 39:
        this.moveRight()
        break
      case 13:
        this.jumpPage()
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
  getTime = () => {
    clearInterval('time')
    let time = setInterval(() => {
      let myDate = new Date()
      let hour = myDate.getHours()
      let minute = myDate.getMinutes()
      if (`${minute}`.length <= 1) {
        minute = `0${minute}`
      }
      this.props.dispatch({ type: 'dashboard/change', payload: { time: `${hour} : ${minute}` } })
    }, 1000)
  }
  curBg = () => {
    const { currentHeader } = this.props.dashboard
    switch (currentHeader) {
      case 'recommend':
        return tuijian
        break
      case 'cartoonhouse':
        return carToonBg
        break
      case 'classification':
        return fenleibg
        break
      case 'leaderboard':
        return paihangbg
        break
      case 'search':
        return paihangbg
        break
    }
  }

  render() {
    const { currentHeader, headerBlur } = this.props.dashboard
    let timeOpts = {
      time: this.props.dashboard.time,
      timePosition: {
        left: '11.54rem',
        top: '.36rem',
      },
    }
    return (
      <div style={{ backgroundImage: `url(${defaultBg})` }}>
        <div className={styles.container} style={{ backgroundImage: `url(${this.curBg()})` }}>
          {/*<div className={styles.time}>{this.props.dashboard.time}</div>*/}
          <Time {...timeOpts}/>
          {
            headerColumn.map((item, index) => {
              const width = item.width / 100 + 'rem'
              const height = item.height / 100 + 'rem'
              const top = item.top / 100 + 'rem'
              const left = item.left / 100 + 'rem'
              let componentOpts = {
                Index: index, currentHeader, headerBlur,
              }
              let divStyle = {
                width, height, top, left,
              }
              return <div
                className={styles.absoluteDiv}
                key={index}
                style={divStyle}>
                <ChildrenComponent {...componentOpts}/>
              </div>
            })
          }
          {
            currentHeader == 'recommend' ? <Recommend
                dashboard={this.props.dashboard}
                dispatch={this.props.dispatch}/> :
              currentHeader == 'cartoonhouse' ?
                <CartoonHouse dashboard={this.props.dashboard}
                              dispatch={this.props.dispatch}/> :
                currentHeader == 'classification' ?
                  <Classification dashboard={this.props.dashboard}
                                  dispatch={this.props.dispatch}/> :
                  currentHeader == 'leaderboard' || currentHeader == 'search' ?
                    <Leaderboard dashboard={this.props.dashboard}
                                 dispatch={this.props.dispatch}/> :
                    <Error/>
          }
        </div>
      </div>
    )
  }
}

export default connect(({ dashboard, loading }) => ({ dashboard, loading }))(Dashboard)


import React from 'react'
import styles from './index.less'
import { connect } from 'dva'
import { config } from 'utils'
import bgimg from './images/bg.jpg'
import empty_bg from './images/empty_collects.jpg'
import cover_button_bg from './images/button.png'
import cover from './images/cover.png'
import cover_focus from './images/cover_focus.png'
import long_btn_bg from './images/long_btn_bg.png'
import long_btn_focus from './images/long_btn_focus.png'
import short_btn_bg from './images/short_btn_bg.png'
import short_btn_focus from './images/short_btn_focus.png'

const column = [

  {
    left: '80',
    top: '85',
    width: '160',
    height: '240',
    contentImg: `${cover}`,
    contentText: '画起来',
    bgImg: `${cover_focus}`,
  },
  {
    left: '272',
    top: '85',
    width: '160',
    height: '240',
    contentImg: `${cover}`,
    contentText: '手影故事会',
    bgImg: `${cover_focus}`,
  },
  {
    left: '464',
    top: '85',
    width: '160',
    height: '240',
    contentImg: `${cover}`,
    contentText: '手影故事会手影故事会',
    bgImg: `${cover_focus}`,
  },
  {
    left: '656',
    top: '85',
    width: '160',
    height: '240',
    contentImg: `${cover}`,
    contentText: '手影故事会',
    bgImg: `${cover_focus}`,
  },
  {
    left: '848',
    top: '85',
    width: '160',
    height: '240',
    contentImg: `${cover}`,
    contentText: '手影故事会',
    bgImg: `${cover_focus}`,
  },
  {
    left: '1040',
    top: '85',
    width: '160',
    height: '240',
    contentImg: `${cover}`,
    contentText: '手影故事会',
    bgImg: `${cover_focus}`,
  },

  {
    left: '80',
    top: '371',
    width: '160',
    height: '240',
    contentImg: `${cover}`,
    contentText: '画起来',
    bgImg: `${cover_focus}`,
  },
  {
    left: '272',
    top: '371',
    width: '160',
    height: '240',
    contentImg: `${cover}`,
    contentText: '手影故事会',
    bgImg: `${cover_focus}`,
  },
  {
    left: '464',
    top: '371',
    width: '160',
    height: '240',
    contentImg: `${cover}`,
    contentText: '手影故事会手影故事会',
    bgImg: `${cover_focus}`,
  },
  {
    left: '656',
    top: '371',
    width: '160',
    height: '240',
    contentImg: `${cover}`,
    contentText: '手影故事会',
    bgImg: `${cover_focus}`,
  },
  {
    left: '848',
    top: '371',
    width: '160',
    height: '240',
    contentImg: `${cover}`,
    contentText: '手影故事会',
    bgImg: `${cover_focus}`,
  },
  {
    left: '1040',
    top: '371',
    width: '160',
    height: '240',
    contentImg: `${cover}`,
    contentText: '手影故事会',
    bgImg: `${cover_focus}`,
  },
]


class Collects extends React.Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
    let that = this
    setTimeout(() => {
      that.props.dispatch({ type: 'collects/change', payload: { focusStatus: 101 } })
    }, 10)
  }


  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 37:
        console.log('moveLeft')
        this.moveLeft()

        break
      case 38:
        console.log('moveUp')
        this.moveUp()
        break
      case 39:
        console.log('moveRight')
        this.moveRight()
        break
      case 40:
        console.log('moveDown')
        this.moveDown()
        break
      case 13:
        console.log('handleEnter')
        this.handleEnter()
        break
    }
  }

  handleEnter = (e) => {
    var pageIndex = this.props.collects.pageIndex
    var currentData = this.props.collects.pagesData[(pageIndex - 1)]
    var currentIndex = this.props.collects.currentIndex

    this.props.dispatch({
      type: 'collects/jumpPage',
      payload: {
        seriesId: currentData[currentIndex].series_id,
        episode: 1,
        focusStatus: this.props.collects.focusStatus,
        id: currentData[currentIndex].id,
        pageIndex: pageIndex,
        currentIndex: currentIndex,
        initialData: this.props.collects.initialData,
      },
    })
  }


  moveLeft = (e) => {
    var currentIndex = this.props.collects.currentIndex
    var focusStatus = this.props.collects.focusStatus

    if (focusStatus == 103) {
      focusStatus = 102
    } else {
      if (focusStatus == 102) {
        focusStatus = 103
      }
      if (currentIndex > 0) {
        currentIndex--
      }
    }

    this.props.dispatch({
      type: 'collects/change',
      payload: {
        currentIndex: currentIndex,
        // pageIndex: pageIndex,
        focusStatus: focusStatus,
      },
    })
  }

  moveRight = (e) => {
    var currentIndex = this.props.collects.currentIndex
    var pageIndex = this.props.collects.pageIndex
    var focusStatus = this.props.collects.focusStatus
    var currentData = this.props.collects.pagesData[pageIndex - 1]
    if (focusStatus == 102) {
      focusStatus = 103
    } else {
      if (focusStatus == 103) {
        focusStatus = 102
      }
      if (currentIndex < (currentData.length - 1)) {
        currentIndex++

      }
    }

    this.props.dispatch({
      type: 'collects/change',
      payload: {
        currentIndex: currentIndex,
        // pageIndex: pageIndex,
        focusStatus: focusStatus,
      },
    })

  }

  moveUp = (e) => {
    var currentIndex = this.props.collects.currentIndex
    var pageIndex = this.props.collects.pageIndex
    var focusStatus = this.props.collects.focusStatus
    if (focusStatus == 102) {
      focusStatus = 101
    } else if (focusStatus == 103) {
      focusStatus = 101
    } else {
      switch (currentIndex) {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
          focusStatus = 102
          break
      }

      switch (currentIndex) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          if (focusStatus == 101 && pageIndex > 1) {
            pageIndex--
            currentIndex = 0
            focusStatus = 101
          }

          break
        case 6:
          currentIndex = 0
          break
        case 7:
          currentIndex = 1
          break
        case 8:
          currentIndex = 2
          break
        case 9:
          currentIndex = 3
          break
        case 10:
          currentIndex = 4
          break
        case 11:
          currentIndex = 5
          break
      }
    }

    this.props.dispatch({
      type: 'collects/change',
      payload: {
        currentIndex: currentIndex,
        pageIndex: pageIndex,
        focusStatus: focusStatus,
      },
    })

  }

  moveDown = (e) => {
    var currentIndex = this.props.collects.currentIndex
    var pageIndex = this.props.collects.pageIndex
    var focusStatus = this.props.collects.focusStatus
    const count = this.props.collects.pagesData[pageIndex - 1].length

    if (focusStatus == 101) {
      focusStatus = 102
    } else {
      switch (currentIndex) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          focusStatus = 101
          break
      }

      switch (currentIndex) {
        case 0:
          currentIndex = 6
          break
        case 1:
          currentIndex = 7
          break
        case 2:
          currentIndex = 8
          break
        case 3:
          currentIndex = 9
          break
        case 4:
          currentIndex = 10
          break
        case 5:
          currentIndex = 11
          break
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
          if (focusStatus != 101 && pageIndex < this.props.collects.pagesData.length) {
            pageIndex++
            currentIndex = 0
            focusStatus = 101
          }
          break
      }
    }

    if (currentIndex >= count) {
      currentIndex = (count - 1)
    }


    this.props.dispatch({
      type: 'collects/change',
      payload: {
        currentIndex: currentIndex,
        pageIndex: pageIndex,
        focusStatus: focusStatus,
      },
    })

  }

  getBtnCoordinate = (item, status) => {
    var newItem = {
      left: 0,
      top: 0,
      width: 61,
      height: 26,
      bgImg: `${short_btn_focus}`,
    }
    if (status == 102) {
      newItem.left = Number(item.left)
      newItem.top = Number(item.top) + 247
    }

    if (status == 103) {
      newItem.bgImg = long_btn_focus
      newItem.width = 90
      newItem.left = Number(item.left) + 70
      newItem.top = Number(item.top) + 247
    }
    return newItem
  }

  compatible = (isLooping, dataItem) => {
    if (isLooping) {
      return <p className={styles.animText}>
                     <span className={styles.todayScroll}>
                          {dataItem.series_name}
                     </span>
        <span className={styles.todayScroll}>
                      {dataItem.series_name}
                    </span>
      </p>
    } else {
      return <p className={styles.text}>{dataItem.series_name}</p>
    }
  }


  render() {
    const current = this.props.collects.currentIndex
    const pageIndex = this.props.collects.pageIndex
    const focusStatus = this.props.collects.focusStatus

    if (pageIndex == undefined || pageIndex == -1) {
      return (
        <div className={styles.container} style={{
          backgroundImage: `url(${empty_bg})`,
        }}>

        </div>
      )
    }

    let totalPage = 0
    let item = column[current]
    let currentData = undefined

    let left = 0
    let top = 0
    let width = 0
    let height = 0

    if (focusStatus != 101) {
      item = this.getBtnCoordinate(item, focusStatus)
    }

    if (this.props.collects.pagesData != undefined) {
      totalPage = this.props.collects.pagesData.length
      currentData = this.props.collects.pagesData[pageIndex - 1]

      left = (Number(item.left) - 13) / 100 + 'rem'
      top = (Number(item.top) - 13) / 100 + 'rem'
      width = (Number(item.width) + 26) / 100 + 'rem'
      height = (Number(item.height) + 26) / 100 + 'rem'
    }


    return (
      <div className={styles.container} style={{
        backgroundImage: `url(${bgimg})`,
      }} id='collectC'>

        {/* 填充所有磁贴 */}
        {
          currentData && currentData.map((dataItem, index) => {
            const item = column[index]
            const left = item.left / 100 + 'rem'
            const top = item.top / 100 + 'rem'
            const width = item.width / 100 + 'rem'
            const height = item.height / 100 + 'rem'
            const parentHeight = (parseInt(item.height) + 34) / 100 + 'rem'
            let isLooping = false
            if (current == index && dataItem.series_name.length > 8) {
              isLooping = true
            }

            if (focusStatus != 101) {
              isLooping = false
            }


            return <div style={{
              width: `${width}`,
              height: `${parentHeight}`,
              position: 'absolute',
              left: `${left}`,
              top: `${top}`,
              overflow: 'hidden',
            }} key={index}>

              {/* 海报图 */}
              <img style={{
                width: `${width}`,
                height: `${height}`,
              }} src={`${config.resPrefix}/${dataItem.cover_url}`}/>

              {/* 海报名称黑色透明背景 */}
              <div className={styles.textbg}></div>

              {/* 海报名称 */}

              {/*{*/}
              {/*isLooping ? <p className={styles.animText}>*/}
              {/*<span className={styles.todayScroll}>*/}
              {/*{dataItem.series_name}*/}
              {/*</span>*/}
              {/*<span className={styles.todayScroll}>*/}
              {/*{dataItem.series_name}*/}
              {/*</span>*/}
              {/*</p> : <p className={styles.text}>{dataItem.series_name}</p>*/}
              {/*}*/}

              {
                this.compatible(isLooping, dataItem)
              }
              {/* 播放按钮 */}
              <div style={{
                position: 'absolute',
                left: `0rem`,
                top: `2.47rem`,
                width: `.61rem`,
                height: `.26rem`,

              }}>
                <img style={{
                  width: `100%`,
                  height: `100%`,
                }} src={`${short_btn_bg}`}/>
                <p className={styles.playText}>播放</p>
              </div>

              {/* 取消收藏按钮 */}
              <div style={{
                position: 'absolute',
                left: `.7rem`,
                top: `2.47rem`,
                width: `.9rem`,
                height: `.26rem`,

              }}>
                <img style={{
                  width: `100%`,
                  height: `100%`,
                }}
                     src={`${long_btn_bg}`}/>
                <p className={styles.playText}>取消收藏</p>

              </div>

            </div>
          })
        }
        {/* 移动边框 */}
        {
          <img ref={'moveFrame'} src={`${item.bgImg}`} style={{
            width: `${width}`,
            height: `${height}`,
            position: 'absolute',
            left: `${left}`,
            top: `${top}`,
          }}/>
        }
        {/* 上一页  下一页 */}
        {
          <div>
            <div className={styles.upPageText} style={{
              position: 'absolute',
              left: `10.06rem`,
              top: `6.81rem`,
            }}>上一页
            </div>
            <div className={styles.upPageText} style={{
              position: 'absolute',
              left: `10.94rem`,
              top: `6.81rem`,
            }}> {pageIndex}/{totalPage}</div>
            <div className={styles.upPageText} style={{
              position: 'absolute',
              left: `11.52rem`,
              top: `6.81rem`,
            }}>下一页
            </div>

          </div>
        }
        {/* 页面名称 */}
        {
          <p className={styles.titleText} style={{
            top: '0.43rem',
            left: '0.80rem',
          }}>我的收藏</p>
        }
        {/* 数量 */}
        {
          <p className={styles.titleText} style={{
            top: '0.43rem',
            left: '11.24rem',
          }}>共{this.props.collects.totalDataCount}个</p>
        }


      </div>
    )
  }
}


export default connect(({ collects, dispatch }) => ({ collects, dispatch }))(Collects)

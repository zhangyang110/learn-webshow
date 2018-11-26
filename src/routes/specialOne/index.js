import React from 'react';
import styles from './index.less'
import { connect } from 'dva'
import { config } from 'utils'
import bg from '../../public/Imgs/detail/bg.jpg'
import arrow_left from './images/arrow_left.png'
import arrow_right from './images/arrow_right.png'
import focus from './images/focus.png'



const column = [

  { left: '80', top: '385', width: '160', height: '240', contentImg: ' ', contentText: '', bgImg: `${focus}` },
  { left: '272', top: '385', width: '160', height: '240', contentImg: ' ', contentText: '', bgImg: `${focus}` },
  { left: '464', top: '385', width: '160', height: '240', contentImg: ' ', contentText: '', bgImg: `${focus}` },
  { left: '656', top: '385', width: '160', height: '240', contentImg: ' ', contentText: '', bgImg: `${focus}` },
  { left: '848', top: '385', width: '160', height: '240', contentImg: ' ', contentText: '', bgImg: `${focus}` },
  { left: '1040', top: '385', width: '160', height: '240', contentImg: ' ', contentText: '', bgImg: `${focus}` },
]


class SpecialOne extends React.Component {

  constructor(props) {
    super(props);

  }


  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
    // document.addEventListener('back', this.handleBack)
    window.addEventListener('popstate', this.handleBack, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleBack = (e) => {
    console.log('handleBack---keycode----')
    console.log(e.keyCode)

  }


  handleKeyDown = (e) => {

    switch (e.keyCode) {
      case 37:
        console.log('moveLeft')
        this.moveLeft()

        break;

      case 39:
        console.log('moveRight')
        this.moveRight()
        break;

      case 13:
        console.log('handleEnter')
        this.handleEnter()
        break;
    }
  }

  handleEnter = (e) => {
    var pageIndex = this.props.speclalone.pageIndex;
    var currentData = this.props.speclalone.pagesData[(pageIndex - 1)]
    var currentIndex = this.props.speclalone.currentIndex;

    this.props.dispatch({
      type: 'speclalone/jumpPage',
      payload: {
        seriesId: currentData[currentIndex].series_id,
      },
    })
  }

  moveLeft = (e) => {
    var currentIndex = this.props.speclalone.currentIndex;
    var pageIndex = this.props.speclalone.pageIndex;

    if (currentIndex > 0) {
      currentIndex--;

    } else {
      if (pageIndex > 1) {
        pageIndex--;
        currentIndex = 5;
      }
    }
    this.props.dispatch({
      type: 'speclalone/change',
      payload: {
        currentIndex: currentIndex,
        pageIndex: pageIndex,
      },
    })
  }

  moveRight = (e) => {
    if (this.props.speclalone.pagesData == undefined) {
      return;
    }
    var currentIndex = this.props.speclalone.currentIndex;
    var pageIndex = this.props.speclalone.pageIndex;
    var currentData = this.props.speclalone.pagesData[(pageIndex - 1)]

    if (currentIndex < (currentData.length - 1)) {
      currentIndex++;

    } else {
      if (pageIndex < this.props.speclalone.pagesData.length) {
        pageIndex++;
        currentIndex = 0;
      }
    }
    this.props.dispatch({
      type: 'speclalone/change',
      payload: {
        currentIndex: currentIndex,
        pageIndex: pageIndex,
      },
    })

  }



  render() {
    const current = this.props.speclalone.currentIndex;
    const pageIndex = this.props.speclalone.pageIndex;
    var totalPage = 0;
    var currentData = undefined;
    var item = {};
    var left = 0;
    var top = 0;
    var width = 0;
    var height = 0;
    var background = bg;

    if (this.props.speclalone.pagesData != undefined) {
      totalPage = this.props.speclalone.pagesData.length;
      currentData = this.props.speclalone.pagesData[(pageIndex - 1)];
      item = column[current];
      left = (Number(item.left) - 13) / 100 + 'rem';
      top = (Number(item.top) - 13) / 100 + 'rem';
      width = (Number(item.width) + 26) / 100 + 'rem';
      height = (Number(item.height) + 26) / 100 + 'rem';
      background = `${config.resPrefix}/${this.props.speclalone.background_url}`
    }




    return (
      <div className={styles.container} style={{ backgroundImage: `url(${background})` }} >
        {/* 填充所有磁贴 */}

        {
          currentData && currentData.map((dataItem, index) => {
            const item = column[index]
            const left = item.left / 100 + 'rem';
            const top = item.top / 100 + 'rem';
            const width = item.width / 100 + 'rem';
            const height = item.height / 100 + 'rem';
            const parentHeight = (parseInt(item.height) + 30) / 100 + 'rem';
            var isLooping = false
            if (current == index && dataItem.name.length > 8) {
              isLooping = true
            }
            return  <div style={{
              width: `${width}`,
              height: `${parentHeight}`,
              position: 'absolute',
              left: `${left}`,
              top: `${top}`,
              overflow: 'hidden',
            }}
              key={index}
            >
              <img style={{
                width: `${width}`,
                height: `${height}`,
              }} src={`${config.resPrefix}/${dataItem.cover_url}`} />


              {
                isLooping ? <p className={styles.animText} >

                  <span className={styles.todayScroll}>
                    {`${dataItem.name}`}
                  </span>
                  <span className={styles.todayScroll}>
                    {`${dataItem.name}`}
                  </span>
                </p> : <p className={styles.text} >{`${dataItem.name}`}</p>

              }

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
            top: `${top}`
          }} />
        }


        {/* 左箭头 */}
        {
          pageIndex == 1 ? '' : <img src={`${arrow_left}`} style={{
            width: `0.33rem`,
            height: `0.56rem`,
            position: 'absolute',
            left: `0.27rem`,
            top: `4.83rem`
          }} />

        }

        {/* 右箭头 */}
        {
          pageIndex == totalPage ? '' : <img src={`${arrow_right}`} style={{
            width: `0.33rem`,
            height: `0.56rem`,
            position: 'absolute',
            left: `12.21rem`,
            top: `4.83rem`
          }} />
        }

      </div>
    );
  }
}

// export default connect (=>)(CoolriceSpecial) ;
export default connect(({ speclalone, dispatch }) => ({ speclalone, dispatch }))(SpecialOne)

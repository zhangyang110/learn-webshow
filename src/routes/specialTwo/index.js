import React from 'react';
import styles from './index.less'
import { connect } from 'dva'
import { config } from 'utils'


import bg from '../../public/Imgs/detail/bg.jpg'
import cell_focus from './images/cell_focus.png'
import poster_focus from './images/poster_focus.png'



const column = [
  { left: '80', top: '85', width: '352', height: '240', contentImg: ' ', contentText: ' ', bgImg: `${cell_focus}` },
  { left: '464', top: '85', width: '352', height: '240', contentImg: ' ', contentText: ' ', bgImg: `${cell_focus}` },
  { left: '848', top: '85', width: '352', height: '240', contentImg: ' ', contentText: ' ', bgImg: `${cell_focus}` },

  { left: '80', top: '371', width: '160', height: '240', contentImg: ' ', contentText: ' ', bgImg: `${poster_focus}` },
  { left: '272', top: '371', width: '160', height: '240', contentImg: ' ', contentText: ' ', bgImg: `${poster_focus}` },
  { left: '464', top: '371', width: '160', height: '240', contentImg: ' ', contentText: ' ', bgImg: `${poster_focus}` },
  { left: '656', top: '371', width: '160', height: '240', contentImg: ' ', contentText: ' ', bgImg: `${poster_focus}` },
  { left: '848', top: '371', width: '160', height: '240', contentImg: ' ', contentText: ' ', bgImg: `${poster_focus}` },
  { left: '1040', top: '371', width: '160', height: '240', contentImg: ' ', contentText: ' ', bgImg: `${poster_focus}` },

]


class SpecialTwo extends React.Component {

  constructor(props) {
    super(props);

  }


  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 37:
        console.log('moveLeft')
        this.moveLeft()

        break;
      case 38:
        console.log('moveUp')
        this.moveUp()
        break;
      case 39:
        console.log('moveRight')
        this.moveRight()
        break;
      case 40:
        console.log('moveDown')
        this.moveDown()
        break;
      case 13:
        console.log('handleEnter')
        this.handleEnter()
        break;
    }
  }

  handleEnter = (e) => {
    var pageIndex = this.props.specialTwo.pageIndex;
    var currentData = this.props.specialTwo.pagesData[(pageIndex - 1)]
    var currentIndex = this.props.specialTwo.currentIndex;

    this.props.dispatch({
      type: 'specialTwo/jumpPage',
      payload: {
        seriesId: currentData[currentIndex].series_id,
      },
    })
  }


  moveLeft = (e) => {
    var currentIndex = this.props.specialTwo.currentIndex;

    if (currentIndex > 0) {
      currentIndex--;
      this.props.dispatch({
        type: 'specialTwo/change',
        payload: {
          currentIndex: currentIndex,
        },
      })
    }

  }

  moveRight = (e) => {
    var currentIndex = this.props.specialTwo.currentIndex;
    var pageIndex = this.props.specialTwo.pageIndex;
    var currentPageData = this.props.specialTwo.pagesData[pageIndex - 1]
    if (currentIndex < (currentPageData.length - 1)) {
      currentIndex++;
      this.props.dispatch({
        type: 'specialTwo/change',
        payload: {
          currentIndex: currentIndex,
        },
      })
    }

  }

  moveUp = (e) => {
    var currentIndex = this.props.specialTwo.currentIndex;
    var pageIndex = this.props.specialTwo.pageIndex;
    switch (currentIndex) {
      case 0:
      case 1:
      case 2:
        if (pageIndex >= this.props.specialTwo.pagesData.length && pageIndex > 1) {
          pageIndex--;
          
          currentIndex = 0;
        }

        break;
      case 3:
      case 4:
        currentIndex = 0;
        break;
      case 5:
      case 6:
        currentIndex = 1;
        break;
      case 7:
      case 8:
        currentIndex = 2;
        break;
    }
    this.props.dispatch({
      type: 'specialTwo/change',
      payload: {
        currentIndex: currentIndex,
        pageIndex: pageIndex,
      },
    })

  }

  moveDown = (e) => {
    var currentIndex = this.props.specialTwo.currentIndex;
    var pageIndex = this.props.specialTwo.pageIndex;
    var currentDataCount = this.props.specialTwo.pagesData[pageIndex - 1].length


    switch (currentIndex) {
      case 0:
        if (currentDataCount > 3) {
          currentIndex = 3;
        }

        break;
      case 1:
        if (currentDataCount > 5) {
          currentIndex = 5;
        } else if (currentDataCount > 3) {
          currentIndex = (currentDataCount - 1);
        }
        break;
      case 2:
        if (currentDataCount > 7) {
          currentIndex = 7;
        } else if (currentDataCount > 3) {
          currentIndex = (currentDataCount - 1);
        }

        break;
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        if (pageIndex < this.props.specialTwo.pagesData.length) {
          pageIndex++;
          currentIndex = 0;
        }

        break;
    }
    this.props.dispatch({
      type: 'specialTwo/change',
      payload: {
        currentIndex: currentIndex,
        pageIndex: pageIndex,
      },
    })


  }




  render() {
    const current = this.props.specialTwo.currentIndex;
    const pageIndex = this.props.specialTwo.pageIndex;
    var currentData = undefined;
    var totalPage = 0;
    var item = {};
    var left = 0;
    var top = 0;
    var width = 0;
    var height = 0;
    

    if (this.props.specialTwo.pagesData != undefined) {
      totalPage = this.props.specialTwo.pagesData.length;
      currentData = this.props.specialTwo.pagesData[pageIndex - 1];
      item = column[current];
      left = (Number(item.left) - 13) / 100 + 'rem';
      top = (Number(item.top) - 13) / 100 + 'rem';
      width = (Number(item.width) + 26) / 100 + 'rem';
      height = (Number(item.height) + 26) / 100 + 'rem';
      
    }

    return (
      <div className={styles.container} style={{ backgroundImage: `url(${bg})` }} >
        {/* 填充所有磁贴 */}

        {
          currentData && currentData.map((dataItem, index) => {
            const item = column[index];
            const left = item.left / 100 + 'rem';
            const top = item.top / 100 + 'rem';
            const width = item.width / 100 + 'rem';
            const height = item.height / 100 + 'rem';
            const parentHeight = (parseInt(item.height) + 30) / 100 + 'rem';
            var isLooping = false
            if (current == index && dataItem.name.length > 8) {
              isLooping = true
            }

            return <div style={{
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
                index >= 3 ? isLooping ? <p className={styles.animText} >

                  <span className={styles.todayScroll}>
                    {`${dataItem.name}`}
                  </span>
                  <span className={styles.todayScroll}>
                    {`${dataItem.name}`}
                  </span>
                </p> : <p className={styles.text} >{`${dataItem.name}`}</p>
                  : <p className={styles.text} >{`${dataItem.name}`}</p>
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
        {/* 上一页  下一页 */}
        {
          <div>
            <div className={styles.pageUpAndDown} style={{
              position: 'absolute',
              left: `10.06rem`,
              top: `6.81rem`,
            }} >上一页</div>
            <div className={styles.pageUpAndDown} style={{
              position: 'absolute',
              left: `10.94rem`,
              top: `6.81rem`,
            }} > {pageIndex}/{totalPage}</div>
            <div className={styles.pageUpAndDown} style={{
              position: 'absolute',
              left: `11.52rem`,
              top: `6.81rem`,
            }} >下一页</div>

          </div>
        }

        {/* 数量 */}
        {
          <p className={styles.titleText} style={{
            top: '0.45rem',
            right: '0.8rem',
          }} >共{this.props.specialTwo.totalCount}个</p>
        }



      </div >
    );
  }
}

// export default connect (=>)(CoolriceSpecial) ;
export default connect(({ specialTwo, dispatch }) => ({ specialTwo, dispatch }))(SpecialTwo)
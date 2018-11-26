import React from "react";
import {connect} from 'dva'
import styles from './index.less'
// import limitedBg from '../../public/Imgs/limited/limitedBg.png'
import topfocus from '../../public/Imgs/limited/topfocus.png'
import botfocus from '../../public/Imgs/limited/botfocus.png'
import {resPrefix} from 'utils/config'
import Loader from "../../components/Loading";
class LimitedFree extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 38:
        this.moveUp()
        break;
      case 40:
        this.moveDown()
        break;
      case 39:
        this.moveRight()
        break;
      case 13:
        this.handleEnter()
        break;
      case 37:
        this.moveLeft()
        break;
    }
    // e.preventDefault && e.preventDefault();
    // e.returnValue = false;
    // e.stopPropagation && e.stopPropagation();
    // return false;
  }
  moveRight = () => {
    const {limitedFocus} = this.props.limited;
    if (limitedFocus >= 0 && limitedFocus < 5) {
      this.props.dispatch({type: 'limited/change', payload: {limitedFocus: limitedFocus + 1}})
    }

  }
  moveLeft = () => {
    const {limitedFocus} = this.props.limited;
    if (limitedFocus > 0 && limitedFocus <= 5) {
      this.props.dispatch({type: 'limited/change', payload: {limitedFocus: limitedFocus - 1}})
    }
  }
  handleEnter = () => {
    const {limitedFocus, pagesData} = this.props.limited;
    this.props.dispatch({type: 'limited/toDetail', payload: pagesData[limitedFocus]})
  }
  moveUp = () => {
    const {limitedFocus} = this.props.limited;
    switch (limitedFocus) {
      case 2:
        this.props.dispatch({type: 'limited/change', payload: {limitedFocus: 0}})
        break;
      case 3:
        this.props.dispatch({type: 'limited/change', payload: {limitedFocus: 0}})
        break;
      case 4:
        this.props.dispatch({type: 'limited/change', payload: {limitedFocus: 1}})
        break;
      case 5:
        this.props.dispatch({type: 'limited/change', payload: {limitedFocus: 1}})
        break;
    }
  }
  moveDown = () => {
    const {limitedFocus} = this.props.limited;
    switch (limitedFocus) {
      case 0:
        this.props.dispatch({type: 'limited/change', payload: {limitedFocus: 2}})
        break;
      case 1:
        this.props.dispatch({type: 'limited/change', payload: {limitedFocus: 4}})
        break;
    }
  }
  findFocus = () => {
    const {limitedFocus, pagesData} = this.props.limited;
    const ImgList = [
      {left: 464, top: 80, width: 352, height: 240, src: pagesData[0].cover_url, name: '', focusSrc: topfocus,},
      {left: 848, top: 80, width: 352, height: 240, src: pagesData[1].cover_url, name: '', focusSrc: topfocus,},
      {
        left: 464,
        top: 352,
        width: 160,
        height: 240,
        src: pagesData[2].cover_url,
        name: pagesData[2].name,
        focusSrc: botfocus
      },
      {
        left: 656,
        top: 352,
        width: 160,
        height: 240,
        src: pagesData[3].cover_url,
        name: pagesData[3].name,
        focusSrc: botfocus
      },
      {
        left: 848,
        top: 352,
        width: 160,
        height: 240,
        src: pagesData[4].cover_url,
        name: pagesData[4].name,
        focusSrc: botfocus
      },
      {
        left: 1040,
        top: 352,
        width: 160,
        height: 240,
        src: pagesData[5].cover_url,
        name: pagesData[5].name,
        focusSrc: botfocus
      },
    ]

    const focusImg = ImgList[limitedFocus];

    const width = (focusImg.width + 26) / 100 + 'rem';
    const height = (focusImg.height + 26) / 100 + 'rem';
    const top = (focusImg.top - 13) / 100 + 'rem';
    const left = (focusImg.left - 13) / 100 + 'rem';
    const src = focusImg.focusSrc;
    const imgStyle = {width, height, position: 'absolute', left, top}
    return <img src={src} style={imgStyle}/>
  }
  mapTem = () => {
    let {pagesData, limitedFocus} = this.props.limited;
    const ImgList = [
      {left: 464, top: 80, width: 352, height: 240, src: pagesData[0].cover_url, name: '', focusSrc: topfocus,},
      {left: 848, top: 80, width: 352, height: 240, src: pagesData[1].cover_url, name: '', focusSrc: topfocus,},
      {
        left: 464,
        top: 352,
        width: 160,
        height: 240,
        src: pagesData[2].cover_url,
        name: pagesData[2].name,
        focusSrc: botfocus
      },
      {
        left: 656,
        top: 352,
        width: 160,
        height: 240,
        src: pagesData[3].cover_url,
        name: pagesData[3].name,
        focusSrc: botfocus
      },
      {
        left: 848,
        top: 352,
        width: 160,
        height: 240,
        src: pagesData[4].cover_url,
        name: pagesData[4].name,
        focusSrc: botfocus
      },
      {
        left: 1040,
        top: 352,
        width: 160,
        height: 240,
        src: `${pagesData[5].cover_url}`,
        name: pagesData[5].name,
        focusSrc: botfocus
      },
    ]
    return ImgList.map((item, index) => {
      const width = item.width / 100 + 'rem';
      const height = item.height / 100 + 'rem';
      const left = item.left / 100 + 'rem';
      const top = item.top / 100 + 'rem';
      const src = item.src;
      const text = item.name;
      const imgStyle = {left: left, top: top, width: width, height: height, position: 'absolute',}
      let docWidth, pWidth
      if (this.magnet) {
        docWidth = document.documentElement.clientWidth / 1280 * 100 * 1.52;
        pWidth = [this.magnet][0].children[limitedFocus].children[1].clientWidth;
      }
      let Animate = limitedFocus == index && pWidth > docWidth
      // let Animate = limitedFocus == index && text.length > 8;

      return <div className={styles.magnet}
                  style={imgStyle}
                  key={index}>
        <img src={`${resPrefix}/${src}`} alt=""/>

        <p className={styles.Calculation}>{text}</p>
        {
          Animate ? <div className={styles.scrollContainer}>
            <p className={styles.Animate}>
              <span className={styles.todayScroll}>{text}</span>
              <span className={styles.todayScroll}>{text}</span>
            </p>
          </div> : <p className={styles.text}>{text}</p>
        }
      </div>
    })

  }

  render() {
    let {background_url, pagesData} = this.props.limited;
    if (pagesData.length <= 0 || !background_url) {
      return (<Loader/>)
    }

    return (<div className={styles.container}
                 ref={node => this.magnet = node}
                 style={{backgroundImage: `url(${resPrefix}/${background_url})`}}>
      {
        this.mapTem()
      }
      {
        this.findFocus()
      }
    </div>)
  }
}

export default connect((limited) => (limited))(LimitedFree)



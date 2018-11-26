import React from "react";
import styles from "./index.less"
import focus1 from '../../../public/Imgs/dashboard/recommend/focusebg1.png'
import focus2 from '../../../public/Imgs/dashboard/recommend/focusebg2.png'
import focus3 from '../../../public/Imgs/dashboard/recommend/focusebg3.png'
import focus4 from '../../../public/Imgs/dashboard/recommend/focusebg4.png'
import history from '../../../public/Imgs/dashboard/recommend/history.png'
import Shoucang from '../../../public/Imgs/dashboard/recommend/shoucang.png'
import tuijian from '../../../public/Imgs/dashboard/index/dashboardBackgroundImg.png'
import ListItem from "../../../components/listItem";
// import Loader from "../../../components/Loading";
import PlayHistory from '../../../public/Imgs/dashboard/recommend/history.png'
import shoucang from '../../../public/Imgs/dashboard/recommend/shoucang.png'
import Loader from "../../../components/Loading";


class Recommend extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.headIndex===0||nextProps.headIndex===0){
      return true
    }else{
      return false
    }
  }

  render() {
    let {botIndex, recommendData, visible} = this.props;
    let recomendTem;
    if (recommendData.length > 0) {
      recomendTem = [
        {
          left: 78,
          top: 162,
          contentSrc: recommendData[0].cover_url,
          width: 431,
          height: 302,
          focusSrc: focus1,
          isLocal: false
        },
        {
          left: 532,
          top: 162,
          contentSrc: recommendData[1].cover_url,
          width: 431,
          height: 302,
          focusSrc: focus1,
          isLocal: false
        },

        {left: 984, top: 162, contentSrc: PlayHistory, width: 218, height: 140, focusSrc: focus2, isLocal: true},
        {left: 984, top: 324, contentSrc: Shoucang, width: 218, height: 140, focusSrc: focus2, isLocal: true},

        {
          left: 78,
          top: 486,
          contentSrc: recommendData[2].cover_url,
          width: 280,
          height: 154,
          focusSrc: focus4,
          isLocal: false
        },
        {
          left: 380,
          top: 486,
          contentSrc: recommendData[3].cover_url,
          width: 280,
          height: 154,
          focusSrc: focus4,
          isLocal: false
        },
        {
          left: 682,
          top: 486,
          contentSrc: recommendData[4].cover_url,
          width: 280,
          height: 154,
          focusSrc: focus4,
          isLocal: false
        },
        {
          left: 984,
          top: 486,
          contentSrc: recommendData[5].cover_url,
          width: 218,
          height: 154,
          focusSrc: focus3,
          isLocal: false
        },
      ]
    } else {
      return <Loader/>
    }
    let recommendStyle = {
      backgroundImage: `url(${tuijian})`,
      visibility: visible ? 'visible' : 'hidden',
    }
    return (<div className={styles.container} style={recommendStyle}>
      {
        recomendTem.map((item, index) => {
          let contentSrc = item.contentSrc;
          let left = item.left / 100 + 'rem';
          let top = item.top / 100 + 'rem';
          let width = item.width / 100 + 'rem';
          let height = item.height / 100 + 'rem';
          let divStyle = {left, top, width, height, position: 'absolute', borderRadius: '0.08rem'};

          let focusLeft = -(13 / 100) + 'rem';
          let focusTop = -(13 / 100) + 'rem';
          let focusWidth = (item.width + 26) / 100 + 'rem'
          let focusHeight = (item.height + 26) / 100 + 'rem';
          let focusSrc = item.focusSrc;
          let focused = index == botIndex ? true : false;
          let display = focused ? 'block' : 'none';
          const isLocal = item.isLocal;
          let focusStyle = {
            left: focusLeft,
            top: focusTop,
            width: focusWidth,
            height: focusHeight,
            position: 'absolute',
            display
          };

          let ItemOpts = {
            focusStyle, divStyle, focusSrc, contentSrc, isLocal
          }

          return <ListItem {...ItemOpts} key={index}/>
        })
      }

    </div>)
  }
}

export default Recommend

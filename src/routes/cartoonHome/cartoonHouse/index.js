import React from "react";
import styles from "./index.less"
import carToonBg from '../../../public/Imgs/dashboard/index/donghuawubg.png'
import Loader from "../../../components/Loading";

import carhead from '../../../public/Imgs/dashboard/cartoon/carhead.png'
import carfocus from '../../../public/Imgs/dashboard/cartoon/carfocus.png'
import connect1 from '../../../public/Imgs/dashboard/cartoon/connect1.png'
import connect2 from '../../../public/Imgs/dashboard/cartoon/connect2.png'
import CartoonUnit from "./cartoonUnit";

const LocalImg = [
  {left: 80, top: 209, width: 224, height: 183, contentSrc: carhead},
  {left: 292, top: 338, width: 37, height: 24, contentSrc: connect2},
  {left: 495, top: 338, width: 60, height: 5, contentSrc: connect1},
  {left: 724, top: 338, width: 60, height: 5, contentSrc: connect1},
  {left: 952, top: 338, width: 60, height: 5, contentSrc: connect1},
  {left: 268, top: 586, width: 60, height: 5, contentSrc: connect1},
  {left: 496, top: 586, width: 60, height: 5, contentSrc: connect1},
  {left: 724, top: 586, width: 60, height: 5, contentSrc: connect1},
  {left: 952, top: 586, width: 60, height: 5, contentSrc: connect1},
]


class CartoonHouse extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.headIndex===1||this.props.headIndex===1){
      return true
    }else{
      return false
    }
  }
  render() {
    let {botIndex, cartoonData, visible} = this.props;
    let cartoonTem;
    if (cartoonData.length > 0) {
      cartoonTem = [
        {
          left: 315,
          top: 170,
          width: 192,
          height: 218,
          contentSrc: cartoonData[0].cover_url,
          contentText: cartoonData[0].object_name,
        },
        {
          left: 543,
          top: 170,
          width: 192,
          height: 218,
          contentSrc: cartoonData[1].cover_url,
          contentText: cartoonData[1].object_name
        },
        {
          left: 771,
          top: 170,
          width: 192,
          height: 218,
          contentSrc: cartoonData[2].cover_url,
          contentText: cartoonData[2].object_name
        },
        {
          left: 999,
          top: 170,
          width: 192,
          height: 218,
          contentSrc: cartoonData[3].cover_url,
          contentText: cartoonData[3].object_name
        },
        {
          left: 87,
          top: 419,
          width: 192,
          height: 218,
          contentSrc: cartoonData[4].cover_url,
          contentText: cartoonData[4].object_name
        },
        {
          left: 315,
          top: 419,
          width: 192,
          height: 218,
          contentSrc: cartoonData[5].cover_url,
          contentText: cartoonData[5].object_name
        },
        {
          left: 543,
          top: 419,
          width: 192,
          height: 218,
          contentSrc: cartoonData[6].cover_url,
          contentText: cartoonData[6].object_name
        },
        {
          left: 771,
          top: 419,
          width: 192,
          height: 218,
          contentSrc: cartoonData[7].cover_url,
          contentText: cartoonData[7].object_name
        },
        {
          left: 999,
          top: 419,
          width: 192,
          height: 218,
          contentSrc: cartoonData[8].cover_url,
          contentText: cartoonData[8].object_name
        },
      ];
    } else {
      return <Loader/>
    }
    let cartoonStyle = {
      backgroundImage: `url(${carToonBg})`,
      visibility: visible ? 'visible' : 'hidden',
    }

    return (<div className={styles.container} style={cartoonStyle}>
      {
        cartoonTem.map((item,index)=>{
          let src = item.contentSrc;
          let left = item.left / 100 + 'rem';
          let top = item.top / 100 + 'rem';
          let width = item.width / 100 + 'rem';
          let height = item.height / 100 + 'rem';
          let divStyle = {left, top, width, height, position: 'absolute', borderRadius: '0.08rem'};

          let focused = index == botIndex ? true : false;
          let Animate = botIndex == index && item.contentText.length > 6;
          // let Animate =true;

          let text=item.contentText;
          // let text='我是短发舒服史蒂夫史蒂夫';
          let UnitOpts={
            width, height, top, left, text, Animate,src,focused,
          }
          return <CartoonUnit {...UnitOpts} key={index}/>

        })
      }
      {
        LocalImg.map((item, index) => {
          const width = item.width / 100 + 'rem';
          const height = item.height / 100 + 'rem';
          const top = item.top / 100 + 'rem';
          const left = item.left / 100 + 'rem';
          return <div key={index} style={{width, height, position: 'absolute', left, top}}>
            <img src={item.contentSrc} style={{width, height}} className={styles.contentImg} alt=""/>
          </div>
        })
      }

    </div>)
  }
}

export default CartoonHouse

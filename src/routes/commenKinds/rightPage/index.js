import React from "react";
import styles from './index.less';
import Magnet from "../../../components/citie";
import noData from '../../../public/eduImgs/commenKinds/rightPage/nodata.png'

const template = [
  {left: 315, top: 85, width: 160, height: 240},
  {left: 496, top: 85, width: 160, height: 240},
  {left: 677, top: 85, width: 160, height: 240},
  {left: 858, top: 85, width: 160, height: 240},
  {left: 1039, top: 85, width: 160, height: 240},
  {left: 315, top: 371, width: 160, height: 240},
  {left: 496, top: 371, width: 160, height: 240},
  {left: 677, top: 371, width: 160, height: 240},
  {left: 858, top: 371, width: 160, height: 240},
  {left: 1039, top: 371, width: 160, height: 240},
]

class KindsRight extends React.Component {
  mapData = () => {
    const {rightData, totalPage, currentPage, rightIndex, leftBlur} = this.props;
    console.log(rightData);
    if (rightData.length <= 0) {
              return <div className={styles.noData}>
                <img src={noData}  alt=""/>
                <div className={styles.textC}>
                  <p className={styles.textTop}>内容正在快马加鞭赶过来 ,</p>
                  <p>耐心等待吧~</p>
                </div>
              </div>
    }
    let data = rightData.slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10);
    return data.map((item, index) => {
      const width = template[index].width / 100 + 'rem';
      const height = template[index].height / 100 + 'rem';
      const left = template[index].left / 100 + 'rem';
      const top = template[index].top / 100 + 'rem';
      const src = item.cover_url;
      const text = item.name;
      let addAnimate = rightIndex == index && text.length >= 9 && leftBlur;
      let focused = rightIndex == index && leftBlur;
      let opts = {
        src,
        left,
        top,
        addAnimate,
        text,
        focused
      }
      return <Magnet {...opts} key={index}/>
    })
  }

  render() {
    return (<div className={styles.KindsRight}>
      {
        this.mapData()
      }
    </div>)
  }
}

export default KindsRight

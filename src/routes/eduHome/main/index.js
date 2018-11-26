import React from "react";
import styles from './index.less'
import {config} from 'utils'

import jingFocus1 from '../../../public/eduImgs/eduHome/main/jingxuan/focus1.png'
import jingFocus2 from '../../../public/eduImgs/eduHome/main/jingxuan/focus2.png'

import youFocus1 from '../../../public/eduImgs/eduHome/main/youying/focus1.png'
import youFocus2 from '../../../public/eduImgs/eduHome/main/youying/focus2.png'
import youFocus3 from '../../../public/eduImgs/eduHome/main/youying/focus3.png'

import xiaoFocus1 from '../../../public/eduImgs/eduHome/main/xiaoxue/focus1.png'
import xiaoFocus2 from '../../../public/eduImgs/eduHome/main/xiaoxue/focus2.png'
import xiaoFocus3 from '../../../public/eduImgs/eduHome/main/xiaoxue/focus3.png'

import chuFocus1 from '../../../public/eduImgs/eduHome/main/chuzhong/focus1.png'
import chuFocus2 from '../../../public/eduImgs/eduHome/main/chuzhong/focus2.png'
import chuFocus3 from '../../../public/eduImgs/eduHome/main/chuzhong/focus3.png'

import gaoFocus1 from '../../../public/eduImgs/eduHome/main/gaozhong/focus1.png'
import gaoFocus2 from '../../../public/eduImgs/eduHome/main/gaozhong/focus2.png'
import gaoFocus3 from '../../../public/eduImgs/eduHome/main/gaozhong/focus3.png'

import xingFocus1 from '../../../public/eduImgs/eduHome/main/xingqu/focus1.png'
import xingFocus2 from '../../../public/eduImgs/eduHome/main/xingqu/focus2.png'
import Loader from "../../../components/Loading";
import Featured from "./Featured";
import Infant from "./Infant";
import Primary from "./primary";
import Junior from "./junior";
import High from "./High";
import Interest from "./intrest";

let mainAry = [
  [//jingxuan
    {left: 107, top: 157, contentSrc: '', width: 341, height: 257, focusSrc: jingFocus1},
    {left: 469, top: 157, contentSrc: '', width: 341, height: 257, focusSrc: jingFocus1},
    {left: 832, top: 157, contentSrc: '', width: 341, height: 257, focusSrc: jingFocus1},

    {left: 107, top: 436, contentSrc: '', width: 160, height: 204, focusSrc: jingFocus2},
    {left: 288, top: 436, contentSrc: '', width: 160, height: 204, focusSrc: jingFocus2},
    {left: 469, top: 436, contentSrc: '', width: 160, height: 204, focusSrc: jingFocus2},
    {left: 651, top: 436, contentSrc: '', width: 160, height: 204, focusSrc: jingFocus2},
    {left: 832, top: 436, contentSrc: '', width: 160, height: 204, focusSrc: jingFocus2},
    {left: 1013, top: 436, contentSrc: '', width: 160, height: 204, focusSrc: jingFocus2},
  ],
  [
    {left: 107, top: 158, contentSrc: '', width: 386, height: 314, focusSrc: youFocus1},
    {left: 515, top: 158, contentSrc: '', width: 386, height: 314, focusSrc: youFocus1},
    {left: 923, top: 158, contentSrc: '', width: 250, height: 62, focusSrc: youFocus2},
    {left: 923, top: 242, contentSrc: '', width: 250, height: 62, focusSrc: youFocus2},
    {left: 923, top: 326, contentSrc: '', width: 250, height: 62, focusSrc: youFocus2},
    {left: 923, top: 410, contentSrc: '', width: 250, height: 62, focusSrc: youFocus2},
    {left: 107, top: 494, contentSrc: '', width: 250, height: 146, focusSrc: youFocus3},
    {left: 379, top: 494, contentSrc: '', width: 250, height: 146, focusSrc: youFocus3},
    {left: 651, top: 494, contentSrc: '', width: 250, height: 146, focusSrc: youFocus3},
    {left: 923, top: 494, contentSrc: '', width: 250, height: 146, focusSrc: youFocus3},
  ],
  [//xiaoxue
    {left: 107, top: 157, contentSrc: '', width: 386, height: 314, focusSrc: xiaoFocus1},
    {left: 515, top: 157, contentSrc: '', width: 386, height: 314, focusSrc: xiaoFocus1},
    {left: 923, top: 157, contentSrc: '', width: 250, height: 146, focusSrc: xiaoFocus2},
    {left: 923, top: 325, contentSrc: '', width: 250, height: 146, focusSrc: xiaoFocus2},
    {left: 107, top: 493, contentSrc: '', width: 114, height: 146, focusSrc: xiaoFocus3},
    {left: 243, top: 493, contentSrc: '', width: 114, height: 146, focusSrc: xiaoFocus3},
    {left: 379, top: 493, contentSrc: '', width: 114, height: 146, focusSrc: xiaoFocus3},
    {left: 515, top: 493, contentSrc: '', width: 114, height: 146, focusSrc: xiaoFocus3},
    {left: 651, top: 493, contentSrc: '', width: 114, height: 146, focusSrc: xiaoFocus3},
    {left: 787, top: 493, contentSrc: '', width: 114, height: 146, focusSrc: xiaoFocus3},
    {left: 923, top: 493, contentSrc: '', width: 250, height: 146, focusSrc: xiaoFocus2},

  ],
  [//chuzhong
    {left: 107, top: 157, contentSrc: '', width: 522, height: 314, focusSrc: chuFocus1},
    {left: 651, top: 157, contentSrc: '', width: 160, height: 314, focusSrc: chuFocus2},
    {left: 832, top: 157, contentSrc: '', width: 160, height: 314, focusSrc: chuFocus2},
    {left: 1013, top: 157, contentSrc: '', width: 160, height: 314, focusSrc: chuFocus2},
    {left: 107, top: 493, contentSrc: '', width: 250, height: 146, focusSrc: chuFocus3},
    {left: 379, top: 493, contentSrc: '', width: 250, height: 146, focusSrc: chuFocus3},
    {left: 651, top: 493, contentSrc: '', width: 250, height: 146, focusSrc: chuFocus3},
    {left: 923, top: 493, contentSrc: '', width: 250, height: 146, focusSrc: chuFocus3},
  ],
  [//gaozhong
    {left: 107, top: 158, contentSrc: '', width: 386, height: 314, focusSrc: gaoFocus1},
    {left: 515, top: 158, contentSrc: '', width: 386, height: 314, focusSrc: gaoFocus1},
    {left: 923, top: 158, contentSrc: '', width: 250, height: 90, focusSrc: gaoFocus2},
    {left: 923, top: 270, contentSrc: '', width: 250, height: 90, focusSrc: gaoFocus2},
    {left: 923, top: 382, contentSrc: '', width: 250, height: 90, focusSrc: gaoFocus2},
    {left: 107, top: 494, contentSrc: '', width: 250, height: 146, focusSrc: gaoFocus3},
    {left: 379, top: 494, contentSrc: '', width: 250, height: 146, focusSrc: gaoFocus3},
    {left: 651, top: 494, contentSrc: '', width: 250, height: 146, focusSrc: gaoFocus3},
    {left: 923, top: 494, contentSrc: '', width: 250, height: 146, focusSrc: gaoFocus3},
  ],
  [
    {left: 107, top: 157, contentSrc: '', width: 386, height: 314, focusSrc: xingFocus1},
    {left: 515, top: 157, contentSrc: '', width: 386, height: 314, focusSrc: xingFocus1},
    {left: 923, top: 157, contentSrc: '', width: 250, height: 146, focusSrc: xingFocus2},
    {left: 923, top: 325, contentSrc: '', width: 250, height: 146, focusSrc: xingFocus2},
    {left: 107, top: 494, contentSrc: '', width: 250, height: 146, focusSrc: xingFocus2},
    {left: 379, top: 494, contentSrc: '', width: 250, height: 146, focusSrc: xingFocus2},
    {left: 651, top: 494, contentSrc: '', width: 250, height: 146, focusSrc: xingFocus2},
    {left: 923, top: 494, contentSrc: '', width: 250, height: 146, focusSrc: xingFocus2},
  ]
]

class HomeMain extends React.Component {
  render() {
    const {botIndex, headIndex, dataAry, headBlur} = this.props;
    if (dataAry.length < 6) {
      return <Loader/>
    }

    for (let i = 0; i < mainAry.length; i++) {
      let curTemAry = mainAry[i];
      let curDataAry = dataAry[i];

      for (let k = 0; k < curTemAry.length; k++) {
          let curTem=curTemAry[k];
          let curData=curDataAry[k];
        curTem.contentSrc = curData.cover_url;
      }
    }

    let FeaturedOpts = {
      curMainTem: mainAry[0],
      botIndex,
      headIndex,
      visible: headIndex === 0 ? true : false,
    }

    let InfantOpts = {
      curMainTem: mainAry[1],
      botIndex,
      headIndex,
      visible: headIndex === 1 ? true : false,
    }
    let PrimaryOpts = {
      curMainTem: mainAry[2],
      botIndex,
      headIndex,
      visible: headIndex === 2 ? true : false,
    }
    let JuniorOpts = {
      curMainTem: mainAry[3],
      botIndex,
      headIndex,
      visible: headIndex === 3 ? true : false,
    }
    let HighOpts = {
      curMainTem: mainAry[4],
      botIndex,
      headIndex,
      visible: headIndex === 4 ? true : false,
    }
    let InterestOpts = {
      curMainTem: mainAry[5],
      botIndex,
      headIndex,
      visible: headIndex === 5 ? true : false,
    }

    return (<div className={styles.botContainer}>
      <Featured {...FeaturedOpts}/>
      <Infant {...InfantOpts}/>
      <Primary {...PrimaryOpts}/>
      <Junior {...JuniorOpts}/>
      <High {...HighOpts}/>
      <Interest {...InterestOpts}/>
    </div>)
  }
}

export default HomeMain

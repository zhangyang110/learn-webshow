import React from "react";
import styles from './index.less'
import headerfocus from '../../../public/Imgs/dashboard/childrenComponent/headerfocus.png'
import searchbg from '../../../public/Imgs/dashboard/childrenComponent/searchbg.png'
import search from '../../../public/Imgs/dashboard/childrenComponent/search.png'
class ChildrenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.Index = this.props.Index;
  }

  defineItem = (index) => {
    const currentHeader=this.props.currentHeader
    const headerBlur=this.props.headerBlur
    switch (index){
          case 0:
            return <div className={styles.header} >
              <img src={currentHeader=='recommend'&&!headerBlur?headerfocus:''} style={{
                display:`${currentHeader == 'recommend'&&!headerBlur ?'block':'none'}`
              }} alt=""/>
              <div className={styles.headerText}
              style={{
                color:`${currentHeader == 'recommend' &&headerBlur?'#feff8f':'white'}`
              }}
              >推荐</div>
            </div>
          break
          case 1:
            return <div  className={styles.header}>
              <img src={currentHeader=='cartoonhouse'&&!headerBlur?headerfocus:''}
                   style={{
                     display:`${currentHeader == 'cartoonhouse'&&!headerBlur ?'block':'none'}`
                   }}
                   alt=""/>
              <div className={styles.headerText}
                   style={{
                     color:`${currentHeader == 'cartoonhouse' &&headerBlur?'#feff8f':'white'}`
                   }}
              >动画屋</div>
            </div>
          case 2:
            return <div  className={styles.header}>
              <img src={currentHeader=='classification'&&!headerBlur?headerfocus:''}
                   style={{
                     display:`${currentHeader == 'classification'&&!headerBlur ?'block':'none'}`
                   }}
                   alt=""/>
              <div className={styles.headerText}
                   style={{
                     color:`${currentHeader == 'classification'&&headerBlur ?'#feff8f':'white'}`
                   }}
              >分类</div>
            </div>
          case 3:
            return <div  className={styles.header}>
              <img src={currentHeader=='leaderboard'&&!headerBlur?headerfocus:''}
                   style={{
                     display:`${currentHeader == 'leaderboard'&&!headerBlur ?'block':'none'}`
                   }}
                   alt=""/>
              <div className={styles.headerText}
                   style={{
                     color:`${currentHeader == 'leaderboard' &&headerBlur?'#feff8f':'white'}`
                   }}
              >排行榜</div>
            </div>
          case 4:
            return <div  className={styles.header}>
              <img src={currentHeader=='search'&&!headerBlur?searchbg:''}
                   style={{
                     display:`${currentHeader == 'search' &&!headerBlur?'block':'none'}`
                   }}
                   alt=""/>
              <div className={styles.headerText}><img className={styles.searchImg} src={search} alt=""/></div>
            </div>

        }
  }

  render() {
    return (<div className={styles.childContainer}>
      {this.defineItem(this.Index)}
    </div>)
  }
}

export default ChildrenComponent

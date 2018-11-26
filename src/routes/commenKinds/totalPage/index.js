import React from "react";
import styles from './index.less'

class TotalPage extends React.Component {

  render() {
    let {currentPage, totalPage} = this.props;
    return (<div className={styles.totalPage}>
      <p className={styles.pre}>上一页</p>
      <p className={styles.text}>{`${currentPage}/${totalPage}`}</p>
      <p className={styles.next}>下一页</p>

    </div>)
  }
}

export default TotalPage

import React from 'react'
import styles from './index.less'
import lBg from '../../../public/globalimgs/loading.png'

export default class LoadVideo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { showLoad } = this.props;
    let mkS = {
      display: showLoad ? 'flex' : 'none',
    }
    return <div className={styles.loading} style={mkS}><img src={lBg} alt=""/></div>
  }
}

import React from "react";
import styles from "./index.less"
import HeadUnit from "./headUnit";

class Head extends React.Component {
  render() {
    let {headerColumn,headIndex,headBlur} = this.props;
    return (
      <div>
        {
          headerColumn.map((item, index) => {
            const width = item.width / 100 + 'rem';
            const height = item.height / 100 + 'rem';
            const top = item.top / 100 + 'rem';
            const left = item.left / 100 + 'rem';
            const text = item.text;
            const focusImg = item.focusImg;
            const searchImg = item.searchImg;
            const isFocused = headIndex == index && !headBlur;
            let isCurrentHead = headIndex == index && headBlur;
            let headOpts = {
              width, height, left, top, text, isFocused, focusImg, searchImg, isCurrentHead
            }
            // return <HeadUnit {...headOpts} key={index}/>
            return <HeadUnit {...headOpts} key={index}/>
          })
        }
      </div>

    )
  }
}

export default Head

import React, { Component } from 'react';
import './index.styl'
//引入图片
import img1 from '../../../images/3/1.png'
import img3 from '../../../images/3/3.png'
import img4 from '../../../images/3/4.png'

export default class ContentBottom extends Component {
  render() {
    return <div>
      <div className="home_content_bottom">
        <div className="content_bottom_top">
          <span className="ledgement"></span>
          <span>新人专享礼</span>
          <span className="ledgement"></span>
        </div>
        <div className="content_bottom">
          <div className="content_bottom_left">
            <p>新人专享礼包</p>
            <img src={img1} alt=""/>
          </div>
          <div className="content_bottom_right">
            <div className="right_top">
              <p>福利社</p>
              <p className="text2">今日特价</p>
              <img src={img3} alt=""/>
            </div>
            <div className="right_bottom">
              <p>新人拼团</p>
              <div>1元起包邮</div>
              <img src={img4} alt=""/>
            </div>
          </div>
        </div>

      </div>
    </div>;
  }
}
import React, { Component } from 'react';
import './index.styl'
//引入图片
import img1 from '../../images/2/1.png'
import img2 from '../../images/2/2.png'
import img3 from '../../images/2/3.png'
import img4 from '../../images/2/4.png'
import img5 from '../../images/2/5.png'
import img6 from '../../images/2/6.png'
import img7 from '../../images/2/7.png'
import img8 from '../../images/2/8.png'
import img9 from '../../images/2/9.png'
import img10 from '../../images/2/10.gif'
export default class HomeContent extends Component {
  render() {
    return <div>
      <div className="home_content">
        <div>
          <div className="home_content_top">
            <span className="iconfont icon-seachx"></span>
            <p>网易自营品牌</p>
          </div>
          <div className="home_content_top">
            <span className="iconfont icon-seachx"></span>
            <p>30天无忧退货</p>
          </div>
          <div className="home_content_top">
            <span className="iconfont icon-seachx"></span>
            <p>48小时快速退款</p>
          </div>
        </div>

        <div className="home_content_centre">
          <ul>
            <li><img src={img1} alt=""/><span>新品发布</span></li>
            <li><img src={img2} alt=""/><span>新品发布</span></li>
            <li><img src={img3} alt=""/><span>新品发布</span></li>
            <li><img src={img4} alt=""/><span>新品发布</span></li>
            <li><img src={img5} alt=""/><span>新品发布</span></li>
            <li><img src={img6} alt=""/><span>新品发布</span></li>
            <li><img src={img7} alt=""/><span>新品发布</span></li>
            <li><img src={img8} alt=""/><span>新品发布</span></li>
            <li><img src={img9} alt=""/><span>新品发布</span></li>
            <li><img src={img10} alt=""/><span>新品发布</span></li>
          </ul>
          <div className="home_content_bottom"></div>
        </div>
      </div>
    </div>;
  }
}
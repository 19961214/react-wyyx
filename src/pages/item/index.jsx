import React, { Component } from 'react';
import './index.styl'
import img1 from '../../images/5/1.jpg'
import img2 from '../../images/5/2.png'
//import BScroll from 'better-scroll'

export default class Item extends Component {
  // componentDidMount(){
  //   new BScroll('.item_content_left',{
  //     click:true,
  //   });
  // }

  render() {
    return <div>
      <div className="item_header">
        <div className="item_header_input">
          <span className="iconfont icon-seachx"></span>
          <p>搜索商品, 共21703款好物</p>
        </div>
      </div>
      <div className="item_content">
        <div className="item_content_left">
          <ul>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
          </ul>
        </div>
        <div className="item_content_right">
          <div className="content_right_top">
            <img src={img1} alt=""/>
          </div>
          <ul className="content_right_bottom">
            <li>
              <img src={img2} alt=""/>
              <span>员工精选好货</span>
            </li>
            <li>
              <img src={img2} alt=""/>
              <span>员工精选好货</span>
            </li>
            <li>
              <img src={img2} alt=""/>
              <span>员工精选好货</span>
            </li>
            <li>
              <img src={img2} alt=""/>
              <span>员工精选好货</span>
            </li>
            <li>
              <img src={img2} alt=""/>
              <span>员工精选好货</span>
            </li>
            <li>
              <img src={img2} alt=""/>
              <span>员工精选好货</span>
            </li>
            <li>
              <img src={img2} alt=""/>
              <span>员工精选好货</span>
            </li>
          </ul>
        </div>
      </div>
    </div>;

  }
}
import React, { Component } from 'react';
import './index.styl'
import imgCart from '../../images/4/car.png'


export default class cart extends Component {

  render() {
    return <div>
      <header>
        <div className="cart_header">
          <div className="cart_header_top">
            <span className="text1">购物车</span>
            <span className="text2">领券</span>
          </div>
          <ul className="cart_header_bottom">
            <li><span>30天无忧退货</span></li>
            <li><span>48小时快速退款</span></li>
            <li><span>满88元包邮</span></li>
          </ul>
        </div>
      </header>
      <div>
        <div className="cart_content">
          <img src={imgCart} alt=""/>
          <span>去添加点什么吧</span>
          <div>登录</div>
        </div>
      </div>
    </div>;

  }
}
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './index.styl'
import img9 from '../../images/4/9.png'

export default class me extends Component {

  render() {
    return <div>
      <div className="me">
        <div className="me_top">
          <Link to="/home"><span className="iconfont icon-home left"></span></Link>
          <h3>网易严选</h3>
          <Link to="/seach"><span className="iconfont icon-seachx right2"></span></Link>
          <Link to="/cart"><span className="iconfont icon-car right1"></span></Link>
        </div>
        <div className="me_content1">
          <img src={img9} alt=""/>
        </div>
        <div className="me_content2">
          <div className="phone">手机号快捷登陆</div>
          <div className="email">邮箱账号登陆</div>
        </div>
        <div className="me_bottom">
          <ul>
            <li>微信</li>
            <li>QQ</li>
            <li>微博</li>
          </ul>
        </div>
      </div>
    </div>;
  }
}
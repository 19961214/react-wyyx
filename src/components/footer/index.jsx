import React, { Component } from 'react';
import { NavLink,withRouter } from 'react-router-dom';
import './index.styl'

class Footer extends Component {
  render() {
    return <div>
      <footer className="footer">
        <ul>
          <NavLink className="footer_item" to="/home">
            <li>
              <span className="iconfont icon-home"></span>
              <span className="footer_text">首页</span>
            </li>
          </NavLink>

            <NavLink className="footer_item" to="/item">
            <li>
              <span className="iconfont icon-classify"></span>
              <span className="footer_text">分类</span>
            </li>
            </NavLink>


            <NavLink className="footer_item" to="/topic">
            <li>
              <span className="iconfont icon-areachart"></span>
              <span className="footer_text">识物</span>
            </li>
            </NavLink>


              <NavLink className="footer_item" to="/cart">
            <li>
              <span className="iconfont icon-car"></span>
              <span className="footer_text">购物车</span>
            </li>
              </NavLink>


             <NavLink className="footer_item" to="/me">
            <li>
              <span className="iconfont icon-user"></span>
              <span className="footer_text">个人</span>
            </li>
             </NavLink>


        </ul>
      </footer>
    </div>;
  }
}
export default withRouter(Footer)
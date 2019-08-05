import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
import './index.styl'
//引入头部滑动库
import BScroll from 'better-scroll'

export default class Header extends Component {
  componentDidMount(){
    new BScroll('.header_bottom',{
      click:true,
      scrollX:true
    });

  }


  state={
    isShow:false,
    categoryList:[
      {
        path:'/home/goods',
        title:'推荐',
        id:''
      },
      {
        path:'/home/item/list',
        title:'居家生活',
        id:2
      },
      {
        path:'/home/item/list',
        title:'服饰鞋包',
        id:3
      },
      {
        path:'/home/item/list',
        title:'美食酒水',
        id:4
      },
      {
        path:'/home/item/list',
        title:'个护清洁',
        id:5
      },
      {
        path:'/home/item/list',
        title:'母婴亲子',
        id:6
      },
      {
        path:'/home/item/list',
        title:'运动旅游',
        id:7
      },
      {
        path:'/home/item/list',
        title:'数码家电',
        id:8
      },
      {
        path:'/home/item/list',
        title:'全球特色',
        id:9
      }
    ]
  };

  render() {
    return <div>
      <header className="header">
        <div className="header_top">
          <h3 className="header_title">网易严选</h3>
          <Link to="/seach">
            <div className="header_input">
              <span className="iconfont icon-seachx"></span>
              <p>搜索商品，共21607款好物</p>
            </div>
          </Link>
          <span className="header_btn">登录</span>
        </div>
        <div className="header_bottom">
          <ul className="header_ul">

            {
              this.state.categoryList.map((item,index)=>{
                return(
                  <NavLink to={item.path + item.id} className="header_list" key={index}>
                    <li>{item.title}</li>
                  </NavLink>
                )
              })
            }


            {/*<li><NavLink to="/home" className="header_list" activeClassName="active">推荐</NavLink></li>*/}
            {/*<li><NavLink to="/home" className="header_list" activeClassName="active">居家生活</NavLink></li>*/}
            {/*<li><NavLink to="/home" className="header_list" activeClassName="active">服饰鞋包</NavLink></li>*/}
            {/*<li><NavLink to="home" className="header_list" activeClassName="active">美食酒水</NavLink></li>*/}
            {/*<li><NavLink to="home" className="header_list" activeClassName="active">个人清洁</NavLink></li>*/}
            {/*<li><NavLink to="home" className="header_list" activeClassName="active">母婴亲子</NavLink></li>*/}
            {/*<li><NavLink to="home" className="header_list" activeClassName="active">运动旅游</NavLink></li>*/}
            {/*<li><NavLink to="home" className="header_list" activeClassName="active">数码家电</NavLink></li>*/}
            {/*<li><NavLink to="home" className="header_list" activeClassName="active">全球特色</NavLink></li>*/}
          </ul>
        </div>
        <div className="header_arrows">
          <span className="iconfont icon-xialajiantou"></span>
        </div>
      </header>
    </div>;
  }
}